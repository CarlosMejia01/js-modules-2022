import {
  secret_number as num1,
  add as sumar,
  subtract as restar,
  divide as dividir,
  name as nombre,
  x,
  y,
  Math
} from "./math.js";

console.log(x);
console.log(y);

console.log(sumar(100, 20));
console.log(restar(100, 20));
console.log(dividir(100, 20));
console.log(nombre);

const math = new Math();
console.log(math.double(4));