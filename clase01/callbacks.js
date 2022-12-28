const getUsuarioById = (id, callback) => {

  const usuario = {
    id,
    nombre: "Roger"
  }

  setTimeout(() => {
    callback(usuario);
  }, 1500);
}

getUsuarioById(10, ({ id, nombre }) => {
  console.log(id);
  console.log(nombre.toUpperCase());
});
