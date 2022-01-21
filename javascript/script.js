var programador = "Deyvid";
var pontuacao = 10;

console.log(programador);
//imprime Deyvid

console.log(pontuacao);
//imprime 10

/////////////////////////////////

var valor = 4;
console.log(typeof valor);
// Vai imprimir 'number'

var sobrenome = "Silva";
console.log(typeof sobrenome);
// Vai imprimir 'string'

var ligado = true;
console.log(typeof ligado);
// Vai imprimir 'boolean'

//Declarando um array

var estados = ["Rio de Janeiro", "São Paulo", "Bahia" ];

console.log(estados[1]); //Usar [] com número do índice para imprimir valor especifico 

var linguagens = ["JavaScript", "PHP", "JAVA", "C#"];

console.log(linguagens[0]); //resultado impresso: JavaScript
console.log(linguagens[3]); //resultado impresso: C#

//Todo array começa com índice 0, para exibir o primeiro valor usar nome_do_array[0]

//Alterando valor do array
var linguagens = ["JavaScript", "PHP", "JAVA", "C#"];
var linguagem = "C";
linguagens[2] = linguagem;

//Armazenando tipos diferentes

var titulo = "Programador";
var quantidadeDeVagas = 5;
var vagaAtiva = true;
var vaga = [titulo, quantidadeDeVagas, vagaAtiva];

console.log(vaga);
//resultado no console (3) ['Programador', 5, true]

////////////////////////////////////
//Variável do tipo undefined
var nome;
console.log(nome.length); //vai imprimir undefined

//Variável do tipo null
var nome  = null;
console.log(nome); // vai imprimir null

/////////////////////////////////////

//Declarando constantes

const url = "https://www.google.com"
