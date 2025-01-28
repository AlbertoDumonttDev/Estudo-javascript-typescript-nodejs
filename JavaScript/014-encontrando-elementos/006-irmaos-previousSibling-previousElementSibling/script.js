"use strict"

const h1 = document.querySelector('h1');

console.log(h1.previousSibling); // Retorna o nó anterior ao elemento h1
console.log(h1.previousElementSibling); // Retorna o elemento anterior ao elemento h1

const p = document.querySelector('.paragrafo');

console.log(p.previousSibling); // Retorna o nó anterior ao elemento p
console.log(p.previousElementSibling); // Retorna o elemento anterior ao elemento p
