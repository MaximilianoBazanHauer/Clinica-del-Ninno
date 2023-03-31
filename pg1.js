
let btnTurnos = document.getElementById("turnos");
btnTurnos.addEventListener("click",() => {
    console.log(btnTurnos);
    redireccionar("https://form.jotform.com/maxihauer88/clinica-del-nio---turnos");
});

function redireccionar(url) {
    window.location.assign(url);
};
