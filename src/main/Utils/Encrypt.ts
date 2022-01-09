export module encrypt  {
let CryptoJS = require("crypto-js");
// Encrypt
let ciphertext = CryptoJS.AES.encrypt('Suraj', 'secret key 123').toString();
// Decrypt
let bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
let originalText = bytes.toString(CryptoJS.enc.Utf8);
console.log("Encrypted word is "+ciphertext);
console.log("Decrypted word is "+originalText);
}