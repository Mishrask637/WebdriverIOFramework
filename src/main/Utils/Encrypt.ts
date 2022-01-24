export class Encrypt  {
CryptoJS = require("crypto-js");
secretKey = 'secret key 123';

    async getEncrypteddata(data)
    {
        // Encrypt
        let ciphertext = this.CryptoJS.AES.encrypt(data, this.secretKey).toString();
        console.log("Encrypted word is "+ciphertext);
    }
    async getDecryptedData(data)
    {
        // Decrypt
        let bytes  = this.CryptoJS.AES.decrypt(data, this.secretKey);
        let originalText = bytes.toString(this.CryptoJS.enc.Utf8);
        // console.log("Decrypted word is "+originalText);
    }
}