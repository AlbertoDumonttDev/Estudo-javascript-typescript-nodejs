"use strict"

const container = document.querySelector('.container');

container.after('Olá mundo!'); // Insere o texto após o container, funciona com nós (ex: textos) HTML
container.before('Olá mundo!'); // Insere o texto antes o container, funciona com nós (ex: textos) HTML


const newP = document.createElement('p');
newP.innerText = "Olá mundo!";
container.after(newP); // Insere o novo elemento após o container
// container.before(newP); // Insere o novo elemento antes o container
