// // 13. Función que toma un argumento de tipo Color y devuelve un mensaje con el color
// enum Color {
// 	Rojo = "Rojo",
// 	Verde = "Verde",
// 	Azul = "Azul"
// }

// function mensajeColor(color: Color): string {
// 	return `El color seleccionado es: ${color}`;
// }

// // Ejemplo de uso:
// const colorElegido: Color = Color.Verde;
// console.log(mensajeColor(colorElegido));


let valor: any = 12345;
// Convertimos el valor a string antes de usar type assertion
let longitud: number = (valor as string | string).toString().length;
console.log(`La longitud del valor como string es: ${longitud}`);
