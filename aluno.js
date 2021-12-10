const aluno = {
    nome: '',
    qtdFaltas: 0,
    notas:  [],

    constructor: function(nome, faltas, notas){
        this.nome = nome;
        this.qtdFaltas = faltas;
        this.notas = notas;
    },

    media_aluno: function(aluno){
        let total = 0;
        aluno.notas.forEach(nota => {
            total += nota;
        });

        let media = total / aluno.notas.lenght;
    },

    increment_faltas: function(aluno){
        aluno = this.qtdFaltas + 1;
    }
}

module.exports = aluno;

