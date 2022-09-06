const watchedAtValidation = (req, res, next) => {
    const { watchedAt } = req.body.talk;
   const regexDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
   if (!watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
}
if (!regexDate.test(watchedAt)) {
    return res.status(400)
    .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
}
   return next();
};

const rateValidations = (req, res, next) => {
    const { rate } = req.body.talk;
 
     if (rate === undefined) {
         return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
     } if (!Number.isInteger(rate) || Number(rate) < 1 || Number(rate) > 5) {
        return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    return next();
 };
 
module.exports = { watchedAtValidation, rateValidations };
