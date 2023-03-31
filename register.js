let database = [];
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  agregarObjeto(event.target);
  redireccionar("http://127.0.0.1:5500/index.html");
});

// FUNCION PARA AGREGAR UN OBJETO A LA BASE DE DATOS
function agregarObjeto(form) {
  // Creamos un objeto con los datos del formulario
  const objeto = {
    nombre: form.nombre.value,
    apellido: form.apellido.value,
    email: form.email.value,
    password: form.password.value,
    dateob: form.dateob.value,
  };

  // Pusheamos el objeto a la base de datos
  database.push(objeto);

  // Guardamos la base de datos en el localStorage
  localStorage.setItem("database", JSON.stringify(database));
  //Limpiamos el form con .reset que lo deja en valores por defecto
  form.reset();
}

//FUNCION PARA REDIRECCIONAR A LA URL SELECCIONADA
function redireccionar(url) {
  window.location.assign(url);
}

function cargarBaseDeDatos() {
  const baseDeDatos = localStorage.getItem("database");
  if (baseDeDatos) {
    database = JSON.parse(baseDeDatos);
  }
}

cargarBaseDeDatos();
console.log(database);
