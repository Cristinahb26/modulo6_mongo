const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({

    UserName: String,
    UrlPhoto: String,
    title: String,
    description: String

})

module.exports = mongoose.model("photo", photoSchema)