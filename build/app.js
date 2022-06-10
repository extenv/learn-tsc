"use strict";
//Basic typescript
let myname = 'Ivan Maulana';
console.log(myname); //Ivan Maulana
function basicFunc(name) {
    return `name: ${name}`;
}
console.log(basicFunc('Ivan Maulana')); //name: Ivan Maulana
function opsiFunc(name) {
    return `name: ${name}`;
}
console.log(opsiFunc()); //name: undefined
function customFunc(name = "Wajib diisi !!!") {
    return `name: ${name}`;
}
console.log(customFunc()); //name: Wajib diisi !!!
