/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  document.querySelector("#Excusa").innerHTML = generateExcuse();
};
console.log();

let generateExcuse = () => {
  let quien = ["Mi madre", "Mi tía", "El gato", "El profesor"];
  let accion = ["rompió", "utilizó", "quemó", "perdió"];
  let cosa = ["los libros", "la comida", "la casa", "el lavabo"];
  let cuando = ["ayer.", "la semana pasada.", "hace un rato.", "hoy."];

  let quienIndx = Math.floor(Math.random() * quien.length);
  let accionIndx = Math.floor(Math.random() * accion.length);
  let cosaIndx = Math.floor(Math.random() * cosa.length);
  let cuandoIndx = Math.floor(Math.random() * cuando.length);

  return (
    quien[quienIndx] +
    " " +
    accion[accionIndx] +
    " " +
    cosa[cosaIndx] +
    " " +
    cuando[cuandoIndx]
  );
};
