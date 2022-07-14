const bcrypt = require('bcrypt'); 

const generatePW = (unhashed_pw) => { 
    
    console.log('PASSWORD LENGTH >> ', unhashed_pw.length);

    if (unhashed_pw.length >= 6) {
        const salt = bcrypt.genSaltSync(12);
        const securePass = bcrypt.hashSync(unhashed_pw, salt); 
    
        return securePass;
    } 
    return undefined
} 

module.exports = { 
    generatePW
}