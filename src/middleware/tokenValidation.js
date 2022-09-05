// const tokenRegex = new RegExp(/^[a-zA-Z0-9]{12}$/); 
const tokenValidation = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: 'Token não encontrado' });  
    } if (authorization.length < 16) {
        return res.status(401).json({ message: 'Token inválido' }); 
    }
    return next();
};

module.exports = { tokenValidation };