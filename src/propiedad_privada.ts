class Car {
    constructor(private make:string){
    }
    getMake(){
        return this.make;
    }
    drive(){
        console.log(`driving a ${this.make}`)
    }
}
const auto = new Car("ford")
auto.drive()