const { addition } = require('../controllers/calculations'); 

/* 
    1- design software
    2- development
    3- tests
        - Manual
        - Automatic
            - Unit 
                -AAA 
                    1A- Prepare the env for the test
                    2A- Alter the state of the function
                    3A- Assert the results
            - Integrated
                -

*/       

test('adds 1 + 1 to equal 2', () => {
    expect(addition(1, 1)).toBe(2);
})