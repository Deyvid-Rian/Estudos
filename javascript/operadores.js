//operadores aritiméticos

var quantidadeVagas = 2 + 5; // adição
var contratados = 7 - 2; // subtração
var valorContribuicao = 2500 * 0.10; // multiplicação
var primeiraParcela = 2500 / 2; // divisão
var resto1 = 15 % 4; // modulo(resto da divisão)

//concatenando string
console.log("texto" + " e complemento");
// Vai imprimir "texto e complemento"

console.log("5" + "6");
// Vai imprimir "56"

//adição em tipos diferentes

console.log("texto" + 20); // "texto20"
console.log("texto" + true); // "textotrue"
console.log("texto" + null); // "textonull"
console.log("texto" + undefined); // "textoundefined"
console.log( [1,2,3] + 4 ) // "1,2,34"
console.log( {nome:'José'} + 1 ); // “[object Object]1”

//Operadores de incremento

var contador = 5;
contador++;
console.log(contador); //contador recebe o valor 6

contador--;
console.log(contador); //contador agora recebe o valor 5

//operadores relacionais

console.log( 21 == 21 ); // vai imprimir true
console.log( 120 == 100); // vai imprimir false

console.log( 11 != 21 ); // vai imprimir true
console.log( 100 != 100); // vai imprimir false

//comparando tipos diferentes

console.log("20"==20); // true
console.log(true == 1) ; // true

//operadores de igualdade e desigualdade estrita

console.log("21" === 21); // o resultado será false
console.log(1 === true); // o resultado será false

console.log("21" !== 21); // o resultado será true
console.log(1 !== true); // o resultado será true

/*
= significa que uma variável recebe ou é atribuída de um valor.
== verifica se uma condição é igual a outra, fazendo conversão de tipo para isso.
=== verifica se uma condição é exatamente igual a outra tanto em tipo quanto em valor.
*/

//operadores lógicos

true && false // false
false || false // false
!true // false

1 == '1' || "a" == "a" // true
35 === '35' && 1 == 10 // false
!( 'a' == 1) // true