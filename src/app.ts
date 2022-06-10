
// Language: typescript
// Path: src/app.ts


let myname: string = 'Ivan Maulana';
//console.log(myname); //Ivan Maulana


function basicFunc(name: String): string {
    return `name: ${name}`;
}
//console.log(basicFunc('Ivan Maulana')); //name: Ivan Maulana


function opsiFunc(name?: String): string {
    return `name: ${name}`;
}
//console.log(opsiFunc()); //name: undefined


function customFunc(name: String = "Wajib diisi !!!"): string {
    return `name: ${name}`;
}
//console.log(customFunc()); //name: Wajib diisi !!!

interface Bio {
    nama: string;
    tinggi: number;
  }
   
function myBio(fill: Bio) {
    console.log(`${fill.nama}, ${fill.tinggi}`);
}

const mybio = { nama: "Ivan Maulana", tinggi: 170 };
//myBio(mybio); //Ivan Maulana, 170


class VirtualBio {
    nama: string;
    tinggi: number;
    constructor(nama: string, tinggi: number) {
      this.nama = nama;
      this.tinggi = tinggi;
    }
  }

const newBio = new VirtualBio("Extenv", 170);
//myBio(newBio); //Ivan Maulana, 170

function cetak(mencetak?:any){
   return console.log(mencetak);
}

let array = [1,2,3,4,5];
for(let get in array){
    //cetak(get) 
}
