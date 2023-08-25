// Avançando em Javascrip

//Manipulação de arrays

const fruta =["Maça", "Laranja"]

//frutas.unshift("Acelora") 
console.log(fruta)
//frutas.shift();
//console.log(frutas)
 
// map, filter, reduce -> arrow functiom 
 
const numeros = [1, 2, 3, 4, 5, 6]

//const numerosPar = numeros.find((num) => num %2 === 0)
//console.log(numerosPar)

const numerosPar = numeros.filter((num)=> num %2 ===0)
console.log(numerosPar)

//Manipulação de String

// const Stringmensagem = "Ola mundo " + "      ";
//FileSystem.out.println(lindo);


 const frase = "Ola mundo "


const palavra = frase.trim()//.slip("  ")
console.log(frase)
console.log(palavra)

const frase2 = "javascrip e mamao"

console.log(frase2.startsWith("Java"));
console.log(frase2.endsWith("!"));

// Exceções e tramanento de erros 
const idade = 15;

//if (idade > 18 )  { throw new Error ("Vocé tem que ter 18 anos ")}
try{
    const idade =15;
     if(idade < 18){throw new Error("Vocé deve ter mais de 18 anos ");
    }
}catch (erros){
    console.log(Error.message);
}

console.log("continuamos o programa...")

// callback => função 

function cumprimentar(nome,callback){console.log("Ola,"+nome);callback();}
//cumprimentar("matheus",mostrarsaudacao);
cumprimentar("Maria",function(){
console.log("ola tudo bem?")})


//settimeout => dps de um tempo executar algo ,uma vez
   function mostrarmensagem(){console.log("essa msg 8 seg")}
   //1000ms = 1 segundo

   setTimeout(mostrarmensagem,6000);


   //promises

   const promessa = new Promise((resolve,reject)=>{const condicao = true;  if (condicao){resolve("A condição e verdadeira")}else{reject("A condição e falsa ")}});
   promessa.then((mensagem)=> {console.log(mensagem)}).catch((erro)=>{console.log(erro)})

   // Biblioteca feita que são "promise based"
    
   const promise1 = Promise.resolve (3);
   const promise2 = new Promise((resolve,reject)=>{setTimeout(resolve, 2500,"testano")})
   Promise.all([promise1,promise2]).then((valores) => console.log(valores))
 
   // Async await 

   async function obterValor(){const promessa = new Promise((resolver,reject)=>{setTimeout(()=> resolve("valor obtido"),2000)})};
   const valor = await promise;
   console.log()
obterValor(valor)



async function obterValorComerro(){ try{const promessa = new Promise((resolver,reject)=>{setTimeout(()=> reject("valor erro"),
2000)})
 const valor = await promise;
 console.log()} catch(erro){console.log(error.message);
terValor(valor)}}
obterValorComerro();


//JSON (javascrip, Object, Notation)
//{nome:"teste"} JOSON =>{"nome":"teste"}
//Padronisa acomunicão 
//front-eng e back-eng em uma linguagem só

const objeto = {nome:{"Joao":30}}

console.log(jsonString)
console.log(typeof jsonString);

const json = '{"nome":{"Joao":30}'
const objeto2 = JSON.perse(joson);

console.log(objeto2)


