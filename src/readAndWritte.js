const fs = require('fs').promises;
const crypto = require('crypto');

const readTalker = async () => {
   const talkerFile = await fs.readFile('./src/talker.json', 'utf8');
    return JSON.parse(talkerFile);
};

const getATalkerById = async (id) => {
    const data = await readTalker();
    return data.find((talker) => talker.id === Number(id));
};

const generateToken = () => crypto.randomBytes(8).toString('hex');

module.exports = generateToken;
module.exports = {
    readTalker,
    getATalkerById,
    generateToken,
};