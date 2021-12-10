const aluno = require('./aluno');

const kaua = new aluno.constructor ('Kaua', 0, [5, 5, 7]);
aluno.increment_faltas(kaua);
aluno.increment_faltas(kaua);

const kleber = new aluno.constructor('kleber', 0, [8, 2, 7]);
aluno.increment_faltas(kleber);

const jorge = new aluno.constructor('Jorge', 0, [9, 8, 7]);

module.exports = {
    kaua,
    kleber,
    jorge
}