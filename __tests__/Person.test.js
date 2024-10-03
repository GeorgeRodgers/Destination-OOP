const Bag = require(`../classes/Bag.js`)
const Person = require(`../classes/Person.js`)
const { describe, test, expect, beforeEach } = require("@jest/globals");

describe(`Test for Person class:`, () => {
    
    let person;

    beforeEach(() => {
        person = new Person(`John`, `London Heathrow`);
    })
    
    test(`Creates an instance of the Person class.`, () => {
        expect(person instanceof Person).toBeTruthy();
    })
    test(`Assigns name and destination correctly`, () => {
        expect(person.name).toBe(`John`);
        expect(person.destination).toBe(`London Heathrow`);
    })
    test(`bags is initialized as an empty array`, () => {
        expect(person.getBag()).toEqual([]);
    })
    test(`Assign a bag to a person`, () => {
        const bag = new Bag(10, 1234);
        person.addBag(bag);
        expect(person.getBag()).toEqual([bag]);
    })
})