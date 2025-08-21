// 13. Función que toma un argumento de tipo Color y devuelve un mensaje con el color
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
function mensajeColor(color) {
    return "El color seleccionado es: ".concat(color);
}
// Ejemplo de uso:
var colorElegido = Color.Verde;
console.log(mensajeColor(colorElegido));
