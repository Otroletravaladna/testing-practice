import * as calc from "../calculator";

describe("Calculator basic operations", () => {
    let calculator; 

    beforeEach(function () {
        calculator = new calc.Calculator();
    });

    test("Add", () => {
        expect(calculator.add(1, 2)).toEqual(3);
    })

    test("Subtract", () => {
        expect(calculator.sub(3, 2)).toEqual(1);
    })

    test("Divide", () => {
        expect(calculator.divide(6, 2)).toEqual(3);
    })

    test("Multiply", () => {
        expect(calculator.multiply(3, 2)).toEqual(6);
    })

    test("Check operation w/o arguments", () => {
        expect(calculator.add()).toMatch(/Please introduce two numbers/);
    })

})