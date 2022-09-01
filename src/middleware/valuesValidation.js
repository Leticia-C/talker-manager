const valuesValidation = (req, res, next) => {
    const { talk } = req.body;
   const { rate, watchedAt } = talk;
   const regexDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

if (!regexDate.test(watchedAt)) {
    return res.status(400)
    .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
}
    if (Number.isInteger(rate)) {
        return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    } if (Number(rate) > 0 && Number(rate) < 6) {
        return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
   return next();
};

module.exports = { valuesValidation };
