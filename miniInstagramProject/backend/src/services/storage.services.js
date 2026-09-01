require("dotenv").config();

const { ImageKit } = require("@imagekit/nodejs");

const storageInstance = new ImageKit({
    urlEndpoint: process.env.IK_URL,
    privateKey: process.env.IK_PRIVATE_KEY,
    publicKey: process.env.IK_PUBLIC_KEY
});

const sendFiles = async(file, fileName) => {
    const obj = {
        file,
        fileName,
        folder: "cohort-3"
    };

    return await storageInstance.upload(obj);
};

module.exports = sendFiles;