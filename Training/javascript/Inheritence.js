class Car {
    color = 'white'
    startEngine() {
        console.log(`starting the car`);
    }

    stopEngine() {
        console.log(`Stopping the car`);
    }
}
class Tyota extends Car {

    startEngine() {
        console.log(`Tyota Engine is very Good, smooth and powerfull`);
    }
    carModel() {
        console.log(`Innova Crysta -2022`);
    }

}
let tyota = new Tyota();
console.log(tyota.color);
tyota.startEngine();
tyota.stopEngine();
tyota.carModel();