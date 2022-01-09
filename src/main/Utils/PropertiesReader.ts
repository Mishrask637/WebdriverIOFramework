let propertiesReader = require('properties-reader');
let CryptoJS = require("crypto-js");
let properties = propertiesReader('./src/main/properties/Database.properties');

export class PropertiesReader{

    async getProperty(propertyName)
    {
        return await properties.get(propertyName);
    }

    async getDecryptedProperty(propertyName)
    {
        let encryptedProperty = await properties.get(propertyName);
        let bytes = await CryptoJS.AES.decrypt(encryptedProperty, 'secret key 123');
        let decryptedProperty = await bytes.toString(CryptoJS.enc.Utf8);
        return await decryptedProperty;
    }

    async setProperty(propertyName,propertyValue)
    {
       await properties.set(propertyName,propertyValue);
    }

    async getAllPropertiesInMap()
    {
        let propertyMap = new Map<any,any>();
        properties.each(async (key, value) => {
            await propertyMap.set(await key, await value);
        });
        await console.log("Property Map Values are "+propertyMap);
        return await propertyMap;
    }

    async getAllProperties()
    {
        return await properties.getAllProperties();
    }

    async getLengthOfProperties()
    {
        return await properties.length;
    }

    async setProperties(propertyMap:Map<any,any>)
    {
        await propertyMap.forEach(async (key, value) => {
            await properties.set(key,value);
        });

        return true;
    }
}