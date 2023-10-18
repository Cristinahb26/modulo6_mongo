const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    login: {

        type: String,

    },

    password: {
        type: String,
        require: true,
        validate: [
            function(password)
            {
                return password.length >= 6;
            },

            'El password deberia de ser mas largo'],
             select: false
    },

});

UserSchema.pre('save', function(next)
{
    console.log("Middleware de entrada");
    if (this.password > 6)
    {
        console.log("Has introducido una contraseña minima")
        next();

    }
    else{
        console.log("la contraseña es mayor o igual minimo");
    }
});

module.exports = mongoose.model("UserValidation", UserSchema)