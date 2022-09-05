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

const createNewTalker = async (newTalker) => {
    try {
        const data = await readTalker();    
        const lastId = data.length; 
        const talker = { id: lastId + 1, ...newTalker };
        data.push(talker);
        await fs.writeFile('./src/talker.json', JSON.stringify(data));
        return talker;
    } catch (error) {
        console.error(error);
    }    
 };

 const putTalker = async (id, body) => {
try {
     const talkers = await readTalker();
    const talker = talkers.find((t) => t.id === id);
    if (talker) {
      const index = talkers.indexOf(talker);
      const updated = { id, ...body };
     talkers.splice(index, 1, updated);
     await fs.writeFile('./src/talker.json', JSON.stringify(talkers));
     return updated; 
}
} catch (error) {
    console.error(error);
}
 };

module.exports = {
    readTalker,
    getATalkerById,
    generateToken,
    createNewTalker,
    putTalker,
};