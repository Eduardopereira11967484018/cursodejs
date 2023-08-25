// DOM Document Object Model 

//Selecionar elementos 

const elementoPorId = document.getElementById("meuId")
console.log(elementoPorId)

const elementoPorId2 = document.querySelector("meuId")
 console.log(elementoPorId2)
 
 const elementPorClasse = document.getElementsByClassName("minhaClasse")
 console.log(elementPorClasse);

 const elementPorClasse2 = document.querySelector("minhaClasse2")
   

 //Manipulação de texto 

 const element = document.querySelector("#meuId")
 //console.log(element.textContent);

setTimeout(() => {element.textContent = "mudei de texto";},1000);
console.log(element.textContent);
// Manipulação de atributos 
 const link = document.querySelector("a")

console.log(link)

link.setAttribute("href","https://www.android.com/intl/en_uk/history/")

console.log(link.getAnimations("href"))

console.log(link.hasAttribute("target"))

link.removeAttribute("target")

//Manipulação de classes 

const elemento = Document.querySelector("#meuId")

element.classList.add("novaClasse")

element.classList.remove("novaclasse");

element.classList.toggle("Outraclasse")

element.classList.toggle("outrclasse")

//Manipular CSS

const element1 = document.querySelector("#meuId")

element1.style.color = "red"
element1.style.backgroundColor = "red"

//Navengação entre nos 

const element2 = document.querySelector("#meuInput")

const pai  = element24.parentNode;

Console.log(pai)


//obter o primeiro filho

const primeiroFilho = pai.Firstchild

console.log(primeiroFilho)

const ultimoFilho = pai.lastChild;

console.log(ultimoFilho)


// Manipulação de estrutura do DOM













