const empleados = [
  {
    id: 1,
    nombre: "Roger"
  },
  {
    id: 2,
    nombre: "Davy"
  },
  {
    id: 3,
    nombre: "Caichihua"
  },
]

const salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 2000
  },
  {
    id: 3,
    salario: 3000
  }
]

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre
  if (empleado) {
    callback(null, empleado)
  }
  else {
    callback(`El usuario con id ${id} no existe`);
  }
}

const getSalario = (id, callback) => {
  const salario = salarios.find((e) => e.id === id)?.salario

  if (salario) {
    callback(null, salario)
  }
  else {
    callback(`El salario del empleado con id ${id} no existe`)
  }
}
let id = 1;
getEmpleado(id, (err, emp) => {

  if (err) {
    console.log('ERROR!');
    return console.log(err);
  }

  getSalario(id, (err, salario) => {
    if (err) {

      return console.log(err);
    }
    console.log(`El empleado: ${emp} tiene un salario de: ${salario}`);
  })
});