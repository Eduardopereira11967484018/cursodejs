// exercios manipulação de array
//crie uma lista de compras que e inicilmente vazia.
//adcione 5 intens a lista usando o puch()
//agora remova o primeiro item da lista usando o shift().
//imprima o console log final .

let listaDeCompras = []
listaDeCompras.push("maça")
listaDeCompras.push("banana")
listaDeCompras.push("limão")
listaDeCompras.push("abacaxi")
listaDeCompras.push("laranja")

listaDeCompras.shift()
console.log(listaDeCompras)

// Exercicios de Manipulação de array -find()
// Vocé  tem um array de números [3,7,14,21,29,36,42].
//use a função find() para encontrar o primeiro número que e divisivel maior que 10.

const numeros = [3,7,14,21,29,36,42]
const divisivel = numeros.find(num => num > 10 && num % 10 === 0);
//console.log(divisivelNumeros)


// Exercicios de Manipulação de Array 

//Crie uma lista de compras inicialmente vazia .
//Adcione 5 itens á lista usando push()
//Agora, remova o primeiro item da lista usando shift()
//imprima a lista final

 let listaDeCompras1 = []
 listaDeCompras1.push("maça","banana","leite","pão","cafe")
 listaDeCompras1.shift();
 console.log(listaDeCompras1)