import * as file_system from 'fs';
import archiver from 'archiver';

function zipDir(source, out) {
    console.log('-- Zipping results --');
    const archive = archiver('zip', { zlib: { level: 9 } });
    const stream = file_system.createWriteStream(out);

    return new Promise((res, rej) => {
        archive
            .directory(source, false)
            .on('error', err => rej(err))
            .pipe(stream);

        stream.on('close', () => res());
        archive.finalize();
    });
}

zipDir(__dirname + '/../allure-results', __dirname + '/../results.zip');
