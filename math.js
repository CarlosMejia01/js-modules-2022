export const secret_number = 30;
//export variable
export let name = "My math module";

//export multiple varables
export let x = 30, y = 100;

export function add(x, y) {
  return x + y;
}

export function subtract(x, y) {
  return x - y;
}

export function multiply(x, y) {
  return x * y;
}

export function divide(x, y) {
  return x / y;
}

//export class
export class Math {
    double(x) {
        return x * x;
    };
};