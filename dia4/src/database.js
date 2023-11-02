let mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ana:accamaluemno@cluster0.1b9cctn.mongodb.net/codenotch",
                {useNewUrlParser: true, useUnifiedTopology: true})

                .then((db) => {
                    console.log("database connected on " + db.connection.host)

                })
                .catch((error) => {
                    console.log(error)
                });

      