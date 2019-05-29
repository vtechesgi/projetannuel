'use strict'
const Attraction = require('../models').Attraction
const Parcours = require('../models').Parcours
class verifyValueController{

     async availableValueForUser(name,email,password){
        const typeName = typeof name;
        const typePass = typeof password;
        const typeMail = typeof email;
    
        if (typePass !== "string" 
            ||typeName !== "string"
            ||typeMail !== "string") return false;
    
        if(email === undefined 
            || name === undefined 
            || password === undefined ) return false;
    
        return true;
    }
}
module.exports = new verifyValueController()