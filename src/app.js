import "./styles.css";

document
  .getElementById("generarExcusaBoton")
  .addEventListener("click", generarExcusa);

function generarExcusa() {
  const who = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
  const action = ["se comió", "orinó", "aplastó", "rompió"];
  const what = ["mis deberes", "mi teléfono", "el coche"];
  const when = [
    "antes de la clase",
    "mientras dormía",
    "mientras hacía ejercicio",
    "durante mi almuerzo",
    "mientras rezaba"
  ];

  const excusa =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)] +
    ".";

  document.getElementById("excuse").innerHTML = excusa;
}

window.onload = generarExcusa;
