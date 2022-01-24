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
                log.info('Json object data is ' + await jsonObject)
                return callback && callback(null, await jsonObject);
            }
            catch (err) {
                await log.info('Unable to parse json file..' + err);
                return callback && callback(err);
            }
        });
    }

    async jsonReader(filePath) {
        fs.readFile(filePath, 'utf-8', async (err, fileData) => {
            if (err) {
                await log.info('Unable to read file ' + err);
            }
            try {
                const jsonObject = JSON.parse(fileData);
                log.info('Json object data is ' + await jsonObject)
                return jsonObject;
            }
            catch (err) {
                await log.info('Unable to parse json file..' + err);
            }
        });
    }

    async jsonWriterWithCallback(filePath, jsonObject, callback) {
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
    }
}