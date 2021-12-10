const aluno = require('./aluno');
const estudantes = require('./estudantes');


const curso = {
    nomeDoCurso: "Javascript",
    notaDeAprovacao: 7,
    maximoFaltas: 2,
    listaDeEstudantes: [
        estudantes.kaua,
        estudantes.kleber,
        estudantes.jorge
    ],
    
    addAluno: function(nome, faltas, notas){
        this.listaDeEstudantes.push(new aluno.constructor(nome, faltas, notas));

    },

    aprovacao: function(estudante){
        const media = aluno.media_aluno(estudante);
        if (
            media >= this.notaDeAprovacao &&
            estudante.qtdFaltas < this.maximoFaltas
        ) {
            return `O estudante ${estudante.nome} foi aprovado`;
        } else if (
            estudante.qtdFaltas === this.maximoFaltas &&
            media > this.notaAprovacao * 1.1
        ) {
            return `O estudante ${estudante.nome} foi aprovado com ressalvas`;
        } else {
            return `O estudante ${estudante.nome} foi reprovado`;
        }
    },

    todosaprovados: function(){
        let todosAlunos =[];
        this.listaDeEstudantes.forEach(estudante => {
            todosAlunos.push(this.aprovacao(estudante));
        });
        return todosAlunos;
    }

}

curso.addAluno('Pedro', 0, [8, 3, 9]);

const aprovados = curso.todosaprovados();

aprovados.forEach(aprovado => {
    console.log(aprovado)
});


