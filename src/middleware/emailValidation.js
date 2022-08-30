const regexEmail = (/^\S+@\S+\.\S+$/i);

const emailValidation = (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!regexEmail.test(email)) {
        return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    
   return next();
};

module.exports = { emailValidation };