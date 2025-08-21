// Ejercicio 14: Type assertions

// Type assertions permiten indicarle al compilador que trate una variable como un tipo específico

// Ejemplo 1: Usando la sintaxis "as"
let someValue: any = "Esto es una cadena de texto";
let strLength: number = (someValue as string).length;
console.log(`La longitud de la cadena es: ${strLength}`);

// Ejemplo 2: Usando la sintaxis con angle-brackets (menos común y no funciona en JSX)
let otherValue: any = "Otra cadena de texto";
let otherLength: number = (<string>otherValue).length;
console.log(`La longitud de la otra cadena es: ${otherLength}`);

// Ejemplo 3: Type assertion con objetos
interface Person {
    name: string;
    age: number;
}

let userInput: any = {
    name: "Juan",
    age: 30
};

// Aseguramos al compilador que userInput es de tipo Person
let user = userInput as Person;
console.log(`Nombre: ${user.name}, Edad: ${user.age}`);

// Ejemplo 4: Type assertion en funciones
function procesarDato(dato: any): string {
    // Aseguramos que dato es un número antes de operarlo
    if (typeof dato === "number") {
        return `El resultado es: ${(dato as number) * 2}`;
    } else {
        return `No es un número: ${dato}`;
    }
}

console.log(procesarDato(5));
console.log(procesarDato("Hola"));

// Exportar la interfaz Person para uso en otros archivos
export { Person };