var validation = (data)=>{
    const Joi = require("joi")
    var schema=Joi.object({
        'username': Joi.string().max(30).alphanum().min(4).required(),
        'email':Joi.string().email().required(),
        'role_ids':Joi.any().valid('superadmin','user').required(),
        "firstName": Joi.string().min(3).max(10).required(),
        "lastName": Joi.string().min(3).max(10).required(),
        "mobile":Joi.string().length(10).pattern(/^[0-9]+$/).message({'string.pattern.base':'Provide a vaild data'}).required(),
        "gender":Joi.any().valid('male','female','others').required(),
        "organization":Joi.string().min(3).required(),
        "password":Joi.string()
            .min(8)
            .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+[a-zA-Z0-9!@#$%^&*]{8,}$"))
            .message({'string.pattern.base':'password must contain Captail letter,small letter,Special character and Number'})
            .required(),
        "conformPassword": Joi.any().valid(Joi.ref('password')).required().messages({ 'any.only': "conformPassword must be same as password" }),
        "is_active":Joi.boolean().required(),
    })
    .with('password', 'conformPassword');
    return schema.validate(data)
    
}
module.exports.validation = validation