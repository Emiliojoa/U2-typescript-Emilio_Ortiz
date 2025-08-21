
function identity<T>(value: T): T {
    return value;
}

function arrayIdentity<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
}
//devuelvo el ultimo valor en formato de numero y no en un array
console.log(arrayIdentity([1, 2, 3]));


const numero = identity<number>(42);
console.log(`Número: ${numero}`);

const texto = identity<string>("Hola mundo");
console.log(`Texto: ${texto}`);

const arreglo = identity<Array<string>>(["a", "b", "c"]);
console.log(`Arreglo: ${arreglo.join(", ")}`);

const booleano = identity<boolean>(true);
console.log(`Booleano: ${booleano}`);