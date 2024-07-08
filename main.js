const alunos = [ 
    {
    nome: 'Rafael',
    nota: 10
    },

    {
    nome:'Antonio',
    nota: 4
    },

    {
    nome:'Maria',
    nota: 7
    },

    {
    nome:'Jaqueline',
    nota: 9
    },

    {
    nome:'Armando',
    nota: 6
    }
]


const alunosAprovados = alunos.filter(item => {
    return item.nota >= 6;
});

//Retornando todos os alunos com nota maior que 6
console.log(alunosAprovados);