// 13. Función que toma un argumento de tipo Color y devuelve un mensaje con el color
enum Color {
	Rojo = "Rojo",
	Verde = "Verde",
	Azul = "Azul"
}

function mensajeColor(color: Color): string {
	return `El color seleccionado es: ${color}`;
}

// Ejemplo de uso:
const colorElegido: Color = Color.Verde;
console.log(mensajeColor(colorElegido));
