import { Then } from '@wdio/cucumber-framework';
const fs = require('fs');
import { log } from '../Logger/logger';
export class JsonReader {

    async jsonReaderWithCallback(filePath, callback) {
        fs.readFile(filePath, 'utf-8', async (err, fileData) => {
            if (err) {
                await log.info('Unable to read file ' + err);
                return callback && callback(err);
            }
            try {
                const jsonObject = JSON.parse(fileData);
                await log.info('Json object data is ' + await JSON.stringify(jsonObject));
                return callback && callback(null, await jsonObject);
            }
            catch (err) {
                await log.info('Unable to parse json file..' + err);
                return callback && callback(err);
            }
        });
    }

    async jsonReader(filePath) {

            await fs.readFile(filePath, 'utf-8', async (err, fileData) => {
            if (err) {
                await log.info('Unable to read file ' + err);
                return await err;
            }
            try {
                const jsonObject = await JSON.parse(await fileData);
                await sleep(5000);
                await log.info('Json object data is ' + await JSON.stringify(jsonObject));
                return await jsonObject;
                
            }
            catch (err) {
                await log.info('Unable to parse json file..' + err);
                return await err;
            }
            
        });
    }


    async jsonReaderSync(filePath)
    {
        let jsonObject = await fs.readFileSync(filePath, {encoding:'utf8'});
        log.info("Json Object is "+jsonObject)
        return await jsonObject
    }

    /* async jsonWriterWithCallback(filePath, jsonObject, callback) {
        fs.writeFile(filePath, JSON.stringify(jsonObject, null, 2), err => {
            if (err) {
                log.info('Unable to write json to file ' + err)
                return callback && callback(err);
            }
            else {
                log.info('File Successfully Written.....')
            }
        });
    }

    async jsonWriter(filePath, jsonObject) {
        fs.writeFile(filePath, JSON.stringify(jsonObject, null, 2), err => {
            if (err) {
                log.info('Unable to write json to file ' + err)
            }
            else {
                log.info('File Successfully Written.....')
            }
        });
    } */
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}