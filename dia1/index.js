let mongoose = require("mongoose");
let User = require("./userMDB");
let Profile = require("./profileMDB");
let Credentials = require("./creedentialsMDB");


mongoose.connect('mongodb+srv://ana:accamaluemno@cluster0.1b9cctn.mongodb.net/codenotch',
                 {useNewUrlParser: false, useUnifiedTopology: false});


let userDocument = new User ({

    login: "Mario_Salv",
    password: "code2618"

});

userDocument.save().then(res =>{
    console.log(res);

}).catch(err =>{

    console.log(err);

});



let ProfileDocument = new Profile({
    
    name: "Arlet",
    surname: "Jimenez",
    dateOfBirth: "14-02-2000",
    Comments: "le gusta mucho su area de trabajo",
    rol: "Secretaria"

});

ProfileDocument.save().then(res =>{
    console.log(res);

}).catch(err =>{

    console.log(err);

});

let CreedentialsDocument = new Credentials ({
    
    address: "Av. los poblados 10",
    phone: 642573085,
    email: "arletJime@gmail.com"

});

CreedentialsDocument.save().then(res =>{
    console.log(res);

}).catch(err =>{

    console.log(err);

});