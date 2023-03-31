//Javascript sobre el login
//ACA ENCONTRAMOS LA VARIABLE DE LA BASE DE DATOS
let database = [];
//Traemos el form por medio del id
const formIndex = document.getElementById("formLogin");

//CREAMOS EL EVENTO PARA ENCONTRAR EL USUARIO DESDE EL SUBMIT
formIndex.addEventListener("submit", (event) => {
  console.log("formIndex", formIndex);
  findUser(event);
  event.preventDefault();
});

//FUNCION PARA VALIDAR EL USUARIO
function findUser(event) {
  event.preventDefault();
  const correoIngresado = event.target.email;
  const contrasennaIngresada = event.target.password;
  const usuario = database.find(
    (usuario) =>
      usuario.email === correoIngresado.value &&
      usuario.password === contrasennaIngresada.value
  );
  console.log(usuario);
  if (usuario) {
    alert("Usuario Valido, se redirigira a la pagina de inicio");
    redireccionar("http://127.0.0.1:5500/pg1.html");
  } else {
    alert("Usuario incorrecto");
  }
  contraseñaIngresada.value = "";
};

//FUNCION PARA LLAMAR A LA BASE DE DATOS
function cargarBaseDeDatos() {
  const baseDeDatos = localStorage.getItem("database");
  if (baseDeDatos) {
    database = JSON.parse(baseDeDatos);
  }
};

function redireccionar(url) {
  window.location.assign(url);
};

cargarBaseDeDatos();
console.log(database);
