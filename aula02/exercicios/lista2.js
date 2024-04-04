console.log("RESPOSTAS 1")

console.log("A) O número 10 é par? " + (10 % 2 === 0));
console.log(`B) A string "Olá" é igual a "oi"? ` + ("Olá" === "oi"));
console.log("C) O valor null é igual a undefined?" +( null === undefined));
console.log("D) A expressão 1 + 1 é menor que 3? " + (1 + 1 < 3));
console.log("E) A expressão 5 * 2 é maior ou igual a 10? " + (5 * 2 >= 10));
console.log(`F) O numero 1 é igual a string "1"? ` + (1 === "1"));

console.log("\nRESPOSTAS 2");
// A) Escreva uma expressão que seja verdadeira se a variável x for maior que 10 e a variável y for menor que 5.
let x = 15;
let y = 2;
console.log("A: " + (x > 10 && y < 5));

// B) Escreva uma expressão que seja verdadeira se a variável a for igual a "verdadeiro" ou a variável b for igual a "falso".
let a = "verdadeiro";
let b = "falso";
console.log("B: " + (a === "verdadeiro" || !b === "falso"));

// C) Escreva uma expressão que seja falsa se a variável c for diferente de 0 e a variável d for igual a "Olá".
let c = 1;
let d = "Olá";
console.log("C: " + !(c !== 0 && d === "Olá"));

console.log("\nRESPOSTAS 3");

// A) Escreva uma expressão que seja verdadeira se a variável x não for igual a 10.
x = 12;
console.log("A: " + !(x === 10));

// B) Escreva uma expressão que seja falsa se a variável y for menor ou igual a 5.
y = 2;
console.log("B: " + !(y <= 5));

// C) Escreva uma expressão que seja verdadeira se a variável z não for vazia.
let z = "cheia"; 
console.log("C: " + (z !== null));

console.log("\nRESPOSTAS 4");

// A) Escreva uma expressão que seja verdadeira se a variável x for maior que 10 ou a variável y for menor que 5, mas não se ambas forem verdadeiras.
x = 11;
y = 4;
console.log("A: " + (x > 10 && y < 5));

// B) Escreva uma expressão que seja verdadeira se a variável a for igual a "verdadeiro" e a variável b for diferente de "falso", ou se a variável c for menor que 0.
a = "verdadeiro";
b = "não verdadeiro";
c = -1;
console.log("B: " + ((a === "verdadeiro" && b !== "falso") || (c < 0)));

// C) Escreva uma expressão que seja falsa se a variável d for igual a "Olá" e a variável e não for vazia, ou se a variável f for maior ou igual a 10.
d = "Olá";
e = "lotada";
f = 10;
console.log("C: " + ((d === "Olá" && e !== null) || (d >= 10)));