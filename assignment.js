// npm i encrypt-rsa --only=production   or  yarn add encrypt-rsa --only=production
const EncryptRsa = require('encrypt-rsa').default;
const encryptRsa = new EncryptRsa();

const { privateKey: skA, publicKey: pkA } = encryptRsa.createPrivateAndPublicKeys();
const { privateKey: skB, publicKey: pkB } = encryptRsa.createPrivateAndPublicKeys();



// ___ USER_A ___
// user_B send text to user_A in Encrypted form 
// by using publicKey of user_A, i.e., pkA
const msgUsrB= "Namaste, I'm user_B using your publickey: pkA";
const encryptedText1 = encryptRsa.encryptStringWithRsaPublicKey({ 
    text:msgUsrB,   
    publicKey: pkA,
});
console.log("pkA: ",encryptedText1);
// user_A received encrypted text from user_B and 
// able to decrypt this text using their privatekey , i.e., skA
const decryptedText1 = encryptRsa.decryptStringWithRsaPrivateKey({ 
    text: encryptedText1,
    privateKey: skA
  });
console.log("skA: ",decryptedText1);
// __________________________________________________________________________


// ___ USER_B ___
// user_A send text to user_B in Encrypted form 
// by using publicKey of user_B, i.e., pkB
const msgUsrA="Namaste, I'm user_A using your publickey: pkB";
const encryptedText2 = encryptRsa.encryptStringWithRsaPublicKey({ 
    text:msgUsrA,   
    publicKey: pkB,
});
console.log("pkB: ",encryptedText2);

// user_B received encrypted text from user_A and 
// able to decrypt this text using their privatekey , i.e., skB
const decryptedText2 = encryptRsa.decryptStringWithRsaPrivateKey({ 
    text: encryptedText2,
    privateKey: skB
  });
console.log("skB: ",decryptedText2);