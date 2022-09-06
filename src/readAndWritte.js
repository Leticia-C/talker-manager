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
        const lastId = data.reduce((acc, cur) => (acc.id > cur.id ? acc.id : cur.id)); 
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

 const deleteTalker = async (id) => {
    const talkers = await readTalker();
    const talker = talkers.find((t) => t.id === id);
      const index = talkers.indexOf(talker);
     talkers.splice(index, 2);
     await fs.writeFile('./src/talker.json', JSON.stringify(talkers));
     return talkers;
 };

 const getATalkerByName = async (q) => {
    const data = await readTalker();
    if (q) {
      data.filter((activity) => activity.name.includes(q));
    }
    if (!q) {
       return data;
    }
};

module.exports = {
    readTalker,
    getATalkerById,
    generateToken,
    createNewTalker,
    putTalker,
    deleteTalker,
    getATalkerByName,
};