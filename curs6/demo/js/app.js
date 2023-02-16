import  salutAAA, {add, inm } from './main.js';

let x = 344444;
let y = 15;

let suma = add(x, y);
let produs = inm(x, y);

function salut(m){
    return 'Salut ' + m;
}

console.log(`Suma numerelor x si y este ${suma}`);
console.log(`Suma numerelor ${x} si ${y} este ${suma}`);
console.log(`Produsul numerelor ${x} si ${y} este`, produs);
 let buna = salut('Ion');
 console.log(buna);
 let sal = salutAAA('Vasile');
 console.log(sal);