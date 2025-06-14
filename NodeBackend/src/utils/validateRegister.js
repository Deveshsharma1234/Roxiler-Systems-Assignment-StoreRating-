const validate = require('validator');

const validateRegister = (req) => {
    const { FirstName, LastName, Email, Phone, Password } = req.body;
    if (!FirstName || !LastName || !Email || !Phone  || !Password) throw new Error("All fields are required error from backend");
    if (!validate.isEmail(Email) || !validate.isStrongPassword(Password)) throw new Error("Invalid email or password");
    if(req.body.RoleId){
        if(![1,3].includes(req.body.RoleId)) throw new Error("Invalid RoleId");

    }
}

module.exports = {
    validateRegister
}