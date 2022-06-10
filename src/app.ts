//Basic typescript

let myname: string = 'Ivan Maulana';
console.log(myname); //Ivan Maulana


function basicFunc(name: String): string {
    return `name: ${name}`;
}
console.log(basicFunc('Ivan Maulana')); //name: Ivan Maulana


function opsiFunc(name?: String): string {
    return `name: ${name}`;
}
console.log(opsiFunc()); //name: undefined


function customFunc(name: String = "Wajib diisi !!!"): string {
    return `name: ${name}`;
}
console.log(customFunc()); //name: Wajib diisi !!!