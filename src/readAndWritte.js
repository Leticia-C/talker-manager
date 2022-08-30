const fs = require('fs').promises;

const readTalker = async () => {
   const talkerFile = await fs.readFile('./src/talker.json', 'utf8');
    return JSON.parse(talkerFile);
};

const getATalkerById = async (id) => {
    const data = await readTalker();
    return data.find((talker) => talker.id === Number(id));
};

module.exports = {
    readTalker,
    getATalkerById,
};