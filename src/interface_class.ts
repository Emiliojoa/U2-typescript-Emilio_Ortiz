interface Shape{
    area():number
}
class circle implements Shape{
    radio:number
    constructor(radio:number){
        this.radio=radio

    }
    area(){
        return Math.PI*this.radio*this.radio

    }

}
const circulo = new circle(5)
console.log(circulo.area())
