const { generatePW } = require("../index");

describe("generatePass tests", () => {
    it("Must generate different passwords", () => {
        const passTest = "contraseña";
        const pw1 = generatePW(passTest);
        const pw2 = generatePW(passTest);
        
        expect(pw1).not.toBe(pw2);
    });
   
    it("Password must have 6 characters minimum", () => {
        const passTest = "contraseña";

        const pw1 = generatePW(passTest);
        
        expect(pw1).toBeUndefined();
    });
}); 
