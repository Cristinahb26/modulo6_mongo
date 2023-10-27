let mongoose = require("mongoose");
let photo = require("./photoSchema");

mongoose.connect("mongodb+srv://ana:accamaluemno@cluster0.1b9cctn.mongodb.net/codenotch",
                {useNewUrlParser: false, useUnifiedTopology: false})


let photo1 = {

    UserName: "Vanessa_Leal",
    UrlPhoto: "https://turismo.lacerca.com/imagenes/api_thumb/0d475762d015aa5da71eff4c368fdd8a.jpg",
    title: "En el bosque",
    description: "una relajada caminata en el bosque pasando encima de un pequeño lago"
};

let photo2 = {

    UserName: "Pedro_Lopez",
    UrlPhoto: "https://elblogverde.com/wp-content/uploads/2015/03/desierto.jpg",
    title: "tarde de paz",
    description: "Un lindo atardecer en el desierto con un clima calido"
};

let photo3 = {

    UserName: "Carlota_short",
    UrlPhoto: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/gfuvmfczfyosqs1k4ema",
    title: "La Montaña",
    description: "un dia frio en la montañas con una vista impresionante junto a un lago"
};

let photo4 = {

    UserName: "Pedro_Lopez",
    UrlPhoto: "https://i.pinimg.com/236x/78/27/a3/7827a32650edfc7eb0cf9398aa7b9ffe.jpg",
    title: "Perfil",
    description: "Foto de perfil"
};

/* Subida de Fotos */

photo.insertMany([photo1, photo2, photo3, photo4])
     .then(function(res){

        console.log("Documento guardado correctamente")
        console.log(res);
        mongoose.disconnect();
     })
     .catch(function(){

        console.log("Erros al escribir el documento");
     });

/* Dado a un usuario obtener todas sus fotos */ 

// photo.find({UserName: "Carlota_short"})
//      .then((resul) => {

//         console.log(resul);
//         mongoose.disconnect();
//      })
//      .catch((error) => {

//         console.log(error);
//      });

/* Dado el titulo de una foto y una descripción modificar su descripción. */  

// photo.updateOne({UserName: "Vanessa_Leal"}, {description: "caminando por el bosque junto al lago"})
//      .then((result) => {

//         console.log("se ha modificado correctamente");
//         console.log(result);
//         mongoose.disconnect();

//      })
//      .catch((error) => {
//         console.log(error);
//      })


/* Dado un usuario y un titulo de foto eliminar su foto. */

// photo.deleteOne({UserName: "Pedro_Lopez", title: "Perfil"})
//      .then((resul) => {

//         console.log("Photo correctamente Borrado");
//         console.log(resul);
//         mongoose.disconnect();

//      })
//      .catch((error) => {

//         console.log(error);

//      });


/* Dado un usuario eliminar todas sus fotos */

// photo.deleteMany({UserName: "Vanessa_Leal"})
//      .then((resul) => {

//         console.log("Documento correctamente Borrado");
//         console.log(resul);
//         mongoose.disconnect();

//      })
//      .catch((error) => {

//         console.log(error);

//      });     


