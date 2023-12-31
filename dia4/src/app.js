const express = require("express");
const cors = require('cors');
const photosRouters = require("./routers/photos.routers");
const errorHandling = require("./error/errorHandling");

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(photosRouters);
app.use((req, res, next) => {
         res.status(404).json({
                                error:true,
                                codigo: 404,
                                message: "Endpoint no encontrado"
                             })
});

app.use(errorHandling);

module.exports = app;