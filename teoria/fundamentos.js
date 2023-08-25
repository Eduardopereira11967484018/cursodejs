//fundamentos 
// var nome = "valor"
var minhaVariavel = "Ola, mundo";

console.log(minhaVariavel);

//variavel e tipos  de dados ex
 var meuNumero = 10;
 console.log(meuNumero);


 console.log(meuNumero + 10);
 
 console.log("10" + 5);

 console.log(typeof meuNumero);

 var Boleano = true; //false

 console.log(typeof Boleano );

 var meuObjeto ={}
 var meuArray = []
 var meuNull = null;
 var meuUnderfinet = undefined;

 console.log(typeof meuObjeto);
 console.log(typeof meuArray);
 console.log(typeof meuNull);
 console.log(typeof meuUnderfinet);

 // let e cosnt
 // novas formas de declarar variaveis

 let x = 10;
 const y  = 5; // const e mais usado 
 console.log(typeof x)
 console.log(x, y);

 //operadores  aritimeticos
 console.log(x + y);
 console.log(x - y);
 console.log(x * y);
 console.log(x / y);

 //Operadores de comparação
 console.log(x==y);
 consol.log(x!=y);
 console.log("5" == 5);
 console.log("5" === 5);
 consolole.log("5" !== 5);

 //operadores logicos
 //And &&
 //Or ||

 console.log(10 > 5 && 20 > 5);
 console.log(10 > 5 && 20 < 5);
 console.log(10 < 5 && 20 > 5);


 console.log(10 > 5 || 20 > 5);
 console.log(10 > 5 || 20 < 5);
 console.log(10 < 5 || 20 < 5);

 //converter de tipos
 const meuNumero2 = "123"

 
 const meuNumeroConvertido = Number(meuNumero2);

 console.log(meuNumeroConvertido);
 console.log(typeof meuNumeroConvertido);

 // EStrutura de condição - if, else, else if
Touch
 const idade = 16

 if(idade < 13) {
    console.log("Criança");
 }  else if(idade<20) {console.log("adolecente");} else {
    console.log("adulto");
 }if(true){console.log("isso execultada");}
 
 //switch

 const fruta = "maça"
 switch(fruta){ case "banana": console.log ("banana é a fruta"); break; case "maça":
console.log ("maça e a fruta!");break; default: console.log("Fruta não encontrada"); }

// EStruturas de repetição
// 1,2,3,4,5,6...=>dependendo das condições 

// contador, condição de limite, incremento
for (let i = 0; i < 5; i++) {console.log("O valor de i e"+ i);}
//concatenação


//while
let k = 0; 
while(k < 5) {console.log("O valor de k: "+k); k++;}



// do while 
let j = 0;
do {console.log("O valor de j é," + j);

j++; } while (j < 5);

//funções
//function nome(arg1, arg2) {corpo}


function comprimentar(nome){console.log("Olá"+ nome);}
//invocações = nome()
cumprementar("Eduardo")

//escopo de variaveis
 let cor = "azul"
 function mostrarcor(){ let cor = "verde"
 console.log(cor)};
 mostrarcor();
 //hoisting = içamento

 testeHoisting()
 function testeHoisting() {console.log("Deu certo");}
// arrow function

const testeArrow = () => console.log("Isso tembem é uma função");
testeArrow();

//truthy e falsy
const minhaVariavel1 =""; //falsy
const minhaVariavel2 = "algum texto"
if (minhaVariave1){console.log("é verdadeiro 2");}
else{consolo.log("É falso");}
if(minhaVariavel2){console.log("É verdadeiro! 2")}
else{console.log("É falso 2 ");}
//array, listas 
//array sempre começa sempre pelo n°0
const numeros = [1,2,3 ,4,5];

console.log(numeros);

console.log(numeros[0]);
console.log(numeros[2]);

numeros.push(6);// adciona
numeros.log(numeros);
numeros.pop();//retira adcionado
console.log(numeros);

//prototype=> OBJETO -> objeto2
//Array => nossos arrays
 numeros.pop();
 console.log(numeros);

 //string
 const minhaString = " Olá Mundo!";

 //concatenaçâo = + 
 const minhaString3 = minhaStringNova + "Como voçé esta?"
 console.log(minhaString3);

 // interpolação 
 //const minhaString4 = ${minhaStringNova} 
// console.log(minhaString4);

console.log(minhaString4.length); //qtd de carcteres
console.log(minhaString4[5]);
console.log(minhaString4.toUppeCase());

//Data e hora
const agora = Date ();
console.log(agora);

const natal = new Date (2023,11,25);
console.log(natal);

//Math
console.log(Math.PI);

console.log1(Math.Pi);

console.log(Math.round(3.6));

console.log(Math.round(16));

console.log(Marth.pow(2,3))

