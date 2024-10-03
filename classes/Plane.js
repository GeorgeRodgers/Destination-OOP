class Plane {
    #passenger
    constructor(company, origin, destination){
        this.company = company;
        this.origin = origin;
        this.destination = destination;
        this.#passenger = [];
    }
    getPassengers(){
        return this.#passenger;
    }
    addPassenger(passenger){
        this.#passenger.push(passenger);
    }
}


module.exports = Plane;