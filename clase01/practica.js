const getUsuario = (id, callback) => {
  const user = {
    id,
    nombre: "Davy"
  }

  setTimeout(() => {
    callback(user);
  }, 1000);
}
getUsuario(1, ({ id, nombre }) => {
  console.log(id);
  console.log('Hola ' + nombre)
});