// Base a ser utilizada
const alunosDaEscola=[{
        nome:"Henrique",
        notas:[],
        cursos:[],
        faltas:5
    },

    {
        nome:"Edson",
        notas:[],
        cursos:[],
        faltas:2
    },

    {
        nome:"Bruno",
        notas:[10,9.8,9.6],
        cursos:[],
        faltas:0
    },

    {
        nome:"Guilherme",
        notas:[10,9.8,9.6],
        cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],
        faltas:0
    },
    
    {
        nome:"Carlos",
        notas:[],
        cursos:[],
        faltas:0
    },

    {
        nome:"Lucca",
        notas:[10,9.8,9.6],
        cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],
        faltas:0
    }
];


// implementação
function adicionarAluno(nome){
 
    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/

        alunosDaEscola.push({nome: nome,notas:[],cursos:[],faltas:0});
        console.log(`O aluno ${nome} foi inserido com sucesso`);
        return true;
}
   

function listarAlunos(){
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
        
        console.log("=== LISTA DE ALUNOS ===");
        console.log();

        for(let i = 0; i < alunosDaEscola.length; i++) {
            console.log("------------------");
            console.log("Nome do aluno: ", alunosDaEscola[i].nome);
            console.log("Notas: ", alunosDaEscola[i].notas);
            let cursos = alunosDaEscola[i].cursos;
            console.log("Cursos: ");
            for(let i = 0; i < cursos.length; i++) {
                console.log("    " + cursos[i].nomeDoCurso + " | Data da matrícula: " + cursos[i].dataMatricula);
            }
            console.log("Faltas: ", alunosDaEscola[i].faltas);
        }
}


function buscarAluno(nome){
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
    

        for (let i = 0; i < alunosDaEscola.length; i++) {

            if (alunosDaEscola[i].nome == nome) {
                console.log(`O aluno ${nome} está matriculado na escola`);
                return i;
            }
        }

        console.log(`O aluno ${nome} não está matriculado na escola`);
}


    function matricularAluno(aluno, curso){
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */
        let alunoAEditar = buscarAluno(aluno);
        if (alunoAEditar >= 0) {
            alunosDaEscola[alunoAEditar].cursos.push({nomeDoCurso:curso,dataMatricula:new Date,});
            console.log(`O aluno ${aluno} foi matriculado no curso ${curso}`);
        }
   }

    function aplicarFalta(aluno){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */
        let alunoAEditar = buscarAluno(aluno);
        if (alunoAEditar >= 0) {
            alunosDaEscola[alunoAEditar].faltas++;
            console.log(`Falta adicionada ao registro do aluno ${aluno}`);
        }
    }
    
    function aplicarNota(aluno, nota){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */
        let alunoAEditar = buscarAluno(aluno);
        if (alunoAEditar >= 0) {
            alunosDaEscola[alunoAEditar].notas.push(nota);
            console.log(`Nota ${nota} adicionada ao registro do aluno ${aluno}`);
        }
   }
   
     function aprovarAluno(aluno){
     /* 
     Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
     Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
     */
        let indice = buscarAluno(aluno);
        if (indice >= 0) {
            let alunoAEditar = alunosDaEscola[indice];

            let mediaDoAluno = (alunoAEditar.notas.reduce((soma, nota) => soma + nota, 0)
            ) / alunoAEditar.notas.length;


            if(alunoAEditar.faltas <= 3 && mediaDoAluno >= 7 && alunoAEditar.cursos.length >= 1) {
                console.log(`O aluno ${aluno} foi aprovado.`);
            } else {
                console.log(`O aluno ${aluno} foi reprovado.`);
            }
        }
    }