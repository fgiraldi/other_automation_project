import {
    createReadStream,
} from 'fs';
import csvtojson from 'csvtojson';
import XLSX from 'xlsx';
import { Browser, expect } from '@playwright/test';

export const verifyCsvHeaders = async (
    fileName: string,
    filePath: string,
    headersList: string[]
) => {
    const csvData = await csvtojson().fromStream(
        createReadStream(filePath)
    );
    expect(
        csvData.length,
        `${csvData.length} lines of data found in ${fileName}`
    ).toBeGreaterThan(0);
    const headers: string[] = Object.keys(csvData[0]);
    let missingHeaders = [];
    var headerValidationResult = headersList
                                    .map(h => {
                                        if (!headers.includes(h)) {
                                            missingHeaders.push(h);
                                            return false;
                                        } else {
                                            return true;
                                        }
                                    }).every(v => v === true);
    var errorMessage = `Expected headers in file "${fileName}" to contain "${JSON.stringify(headersList, undefined, 2)}". Instead saw: "${JSON.stringify(headers, undefined, 2)}" Missing Headers: "${JSON.stringify(missingHeaders, undefined, 2)}"`;                                
    expect(headerValidationResult, errorMessage).toBe(true);
};

export const verifyXlsxHeaders = async (
    fileName: string,
    filePath: string,
    headersList: string[],
    sheet?: string
) => {
    const xlsxData = XLSX.readFile(filePath);
    const headersBySheet = xlsxData.SheetNames.map(sheet => {
        return {
            sheet: sheet,
            headers: Object.keys(xlsxData.Sheets[sheet])
                .filter(key => key.match(/[A-z][1]$/g))
                .map(key => xlsxData.Sheets[sheet][key].v),
        };
    });

    let missingHeaders = {};

    if (sheet) {
        expect(headersBySheet.map(hbs => hbs.sheet)).toContain(sheet);
    } else {
        var headersValidationResults = headersBySheet
                                        .map(hbs =>
                                            headersList.every(h => {
                                                if (!hbs.headers.includes(h)) {
                                                    if (!missingHeaders[hbs.sheet]) {
                                                        missingHeaders[hbs.sheet] = [];
                                                    }
                                                    missingHeaders[hbs.sheet].push(h);
                                                    return false;
                                                } else {
                                                    return true;
                                                }
                                            })
                                        )
                                        .every(v => v === true);
        var errorMessage = `Expected headers in file "${fileName}" to contain "${JSON.stringify(headersList, undefined, 2)} "Missing Headers: "${JSON.stringify(missingHeaders, undefined, 2)}"`;
        expect(headersValidationResults, errorMessage).toBe(true);
    }
};
