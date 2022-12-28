const deadpool = {
  nombre: "davy",
  apellido: "caichihua",
  poder: "paciencia",
  edad: 50,
  getNombre() {
    return `${this.nombre} ${this.apellido} su poder es ${this.poder}`
  }
}
const retornaNombree = deadpool.getNombre()

function imprimeHeroe(heroe) {
  const { nombre, apellido, poder, edad = 0 } = heroe;
  console.log(nombre, apellido, poder, edad);
  console.log(retornaNombree);
}
imprimeHeroe(deadpool)
//const nombre = deadpool.nombre
//const apellido = deadpool.apellidow
//const poder = deadpool.poder

const heroes = ['yo', 'tu', 'otros'];
const [, , h3] = heroes
console.log(h3);






