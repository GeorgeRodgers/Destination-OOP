class Person {
    #bags
    constructor(name, destination){
        this.name = name;
        this.destination = destination;
        this.#bags = [];
    }
    addBag(bag){
        this.#bags.push(bag)
    }
    getBag(){
        return this.#bags;
    }
}


module.exports = Person;