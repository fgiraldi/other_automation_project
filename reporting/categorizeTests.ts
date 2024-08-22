import * as file_system from 'fs';

const categories = [
    {
        name: 'Skipped tests',
        matchedStatuses: ['skipped'],
    },
    {
        name: 'Passed tests',
        matchedStatuses: ['passed'],
    },
    {
        name: 'Product defects',
        matchedStatuses: ['failed', 'broken'],
        traceRegex: '.*Failure.*',
    },
    {
        name: 'Broken tests',
        matchedStatuses: ['broken'],
        traceRegex: '^((?!Failure).)*$',
    },
];

console.log('-- Categorizing Tests --');
if (!file_system.existsSync(__dirname + '/../allure-results')) {
    console.log('Results folder not found. Creating directory.');
    file_system.mkdirSync(__dirname + '/../allure-results');
}

file_system.writeFileSync(
    __dirname + '/../allure-results/categories.json',
    JSON.stringify(categories, undefined, 4)
);
