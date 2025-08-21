function identity(value) {
    return value;
}
function arrayIdentity(arr) {
    return arr[arr.length - 1];
}
console.log(arrayIdentity([1, 2, 3]));
// const numeros = arrayIdentity<number>([1, 2, 3]);
// console.log(`Números: ${numeros.join(", ")}`);
var numero = identity(42);
console.log("N\u00FAmero: ".concat(numero));
var texto = identity("Hola mundo");
console.log("Texto: ".concat(texto));
var arreglo = identity(["a", "b", "c"]);
console.log("Arreglo: ".concat(arreglo.join(", ")));
var booleano = identity(true);
console.log("Booleano: ".concat(booleano));
