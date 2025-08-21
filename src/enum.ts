enum Color {
    Red,
    Green,
    Blue
}

function getColorMessage(color: Color): string {
    switch (color) {
        case Color.Red:
            return "El color seleccionado es Rojo";
        case Color.Green:
            return "El color seleccionado es Verde";
        case Color.Blue:
            return "El color seleccionado es Azul";
        default:
            return "Color desconocido";
    }
}

console.log(getColorMessage(Color.Red));
console.log(getColorMessage(Color.Green));
console.log(getColorMessage(Color.Blue));


console.log(`Color.Red = ${Color.Red}`);
console.log(`Color.Green = ${Color.Green}`);
console.log(`Color.Blue = ${Color.Blue}`);

