let ingNombre = document.getElementById("nombre");
let ingApellido = document.getElementById("apellido");
let ingEmail = document.getElementById("mail");
let ingConsulta = document.getElementById("mensaje");
let botonEnviar = document.getElementById("realizar");

let consultar = () => {
  botonEnviar?.addEventListener("click", () => {
    let nombre = ingNombre.value;
    let apellido = ingApellido.value;
    let email = ingEmail.value;
    let consulta = ingConsulta.value;

    console.log("el nombre ingresado es " + nombre);
    console.log("el apellido ingresdo es " + apellido);
    console.log("el email ingresado es " + email);
    console.log("su consulta " + consulta + " ha sido recibida");
    alert("gracias por su consulta");
  });
};
consultar();
