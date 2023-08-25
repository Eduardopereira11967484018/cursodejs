// Exercios de fundamentos
// Exercicios1: OLa, Mundo 
// Crie um script que imprima o OLa mundo no console

var minhavareavel = "Ola mundo"
 console.log(minhavareavel)

 //exercios de converção de tipos 

 const valorString ="1234"
 const valorNumber = Number(valorString)

 console.log(typeof valorNumber)


 //exercios 3 manipulação de strings
// Dado ema string "Javascript e incrivel", escreva um codigo qu conte quantoscarcteres a string tem e quantas palavras existe na frase 

const minhaString = "Javascript e incrivel"
const NumeroDeCAracteres = minhaString.length
const numeroDePalavras = minhaString.split(" ").length


console.log(`O número de caracteres é : ${NumeroDeCAracteres}`)
console.log(`O número de de palavras é: ${numeroDePalavras}`)

//Exercios 4: Loops e Arrays 
//Crie um Array com 5 nomes. Use um loop for para imprimir

const Nomes = [" João"," Felipe","José" , "Maria","Ana"]
for(let i = 0; i < Nomes.length; i++){ console.log(nomes[i])};

//Exercicios 5 Funções, String e Math

//Crie uma função que aceite uma String Representa representando um horario
//função deve retorna uma string que converta o horario para 
// Use objeto March para auxiliar nesta converção .
//  Certifique-se de que sua função lida corretamente com o horario.

function converterHorario(Horario24){
    //14:20 }=>14, minutos =14 minutos = 20=> slip(":")=> [0]=hora

   // const hora = Horario24.slit(":")[0];
   // const minutos = Horario24.slip(":")[1];
  const [hora,minuto] = Horario24.split(":")
   // 15/ 12 3, 23 % 12 = 11
   //falsy 12 % 12 = 0 => 12
  
  console.log(hora, minuto);
const hora12 = hora % 12|| 12 ;
  converterHorario("15;16")
let periodo = "AM"
if( hora>12){periodo = "PM";}
console.log(`${hora12}:${minutos}${periodo}`);
