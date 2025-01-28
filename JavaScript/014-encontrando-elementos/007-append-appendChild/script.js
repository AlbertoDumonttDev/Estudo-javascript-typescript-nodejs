"use strict"

const container = document.querySelector('.container');

container.append("Olá mundo!");
// container.append("<p>Olá mundo!</p>"); Só funciona com nós (ex: textos) HTML

const newDiv = document.createElement('div');
newDiv.innerText = "Olá mundo!";
container.append(newDiv);

// container.appendChild("Olá mundo!"); Só funciona com elementos HTML