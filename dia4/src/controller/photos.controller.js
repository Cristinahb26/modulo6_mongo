const photo = require("../model/photos");


function getPhotos(req, res) {
    const usuario = req.query.UserName; 

  if(usuario){
  photo.find({UserName: usuario})
     .then((resul) => {
        console.log(resul);
        res.send(resul);
     })
     .catch((error) => {

        console.log(error);
     })
        } else {
          res.status(400).send('Usuario no proporcionado');
        }

};

function postPhotos(req, res){
    
    const newPhoto = new photo({
        UserName: req.body.UserName,
        UrlPhoto: req.body.UrlPhoto,
        title: req.body.title,
        description: req.body.description
      });
                newPhoto.save()
                  .then((resul) => {
                    console.log("Photo subida correctamente");
                    console.log(resul);
                    res.send(resul);
                  })
                  .catch((error) => {
                    console.log(error);
                
                  });             
};

function putPhotos(req, res){

    const { title, description } = req.body;
    photo.updateOne({title}, {description})
     .then((resul) => {

        console.log("se ha modificado correctamente");
        console.log(resul);
        res.send(resul)

     })
     .catch((error) => {
        console.log(error);
     })
    
};

function delPhotos(req, res){

    const { UserName, title } = req.body;

    photo.deleteOne({UserName, title})
     .then((resul) => {

        console.log("Photo correctamente Borrado");
        console.log(resul);
        res.send(resul);

     })
     .catch((error) => {

        console.log(error);

     });

};

function deletePhotos(req, res){

    const { UserName } = req.body;

    photo.deleteMany({UserName})
     .then((resul) => {

        console.log("Documento correctamente Borrado");
        console.log(resul);
        res.send(resul);

     })
     .catch((error) => {

        console.log(error);

     });    
};

module.exports = {getPhotos, postPhotos, putPhotos, delPhotos, deletePhotos};
