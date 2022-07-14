const { substraction, addition } = require('../controllers/calculations');

describe("Substraction tests", () => { 

    test("Should substract 2 numbers", () => {
        expect(substraction(3, 2)).toBe(1);
    });

}); 


describe("Addition tests", () => { 

    test("Should add 2 numbers", () => {
        expect(addition(3, 2)).toBe(5);
    });

});