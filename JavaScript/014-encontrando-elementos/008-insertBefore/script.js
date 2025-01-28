"use strict"

const container = document.querySelector('.container');
const paragrafo = container.querySelector('paragrafo');

const newH2 = document.createElement('h2');
newH2.innerText = "Olá mundo!";

container.insertBefore(newH2, paragrafo); // Insere o novo elemento antes do paragrafo