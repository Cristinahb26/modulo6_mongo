let mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ana:accamaluemno@cluster0.1b9cctn.mongodb.net/Colegio",
                {useNewUrlParser: false, useUnifiedTopology: false});


const teachersSchema = new mongoose.Schema({
                    
                    teacher_first_name: String,
                    teacher_last_name: String,
                
                });

const marksSchema = new mongoose.Schema({
                                   
                    date: Date,
                    mark: Number,
                    student_first_name: String,
                    student_last_name: String,
                    group_name: String,
                    subject_name: String,
                    teachers: [teachersSchema]
                                  
                });               

let TeachersModel = mongoose.model('teachers', teachersSchema, 'Profesores');
let MarksModel = mongoose.model('marks', marksSchema, 'Notas');


const teacher1 = new TeachersModel({teacher_first_name: "Pamela", teacher_last_name: "Lobaton"})
const teacher2 = new TeachersModel({teacher_first_name: "Carolina", teacher_last_name: "Vargas"})
const teacher3 = new TeachersModel({teacher_first_name: "Sofia", teacher_last_name: "Mora"})
const teacher4 = new TeachersModel({teacher_first_name: "Zoe", teacher_last_name: "Morillo"})
const teacher5 = new TeachersModel({teacher_first_name: "Diego", teacher_last_name: "Ruiz"})
const teacher6 = new TeachersModel({teacher_first_name: "Tomas", teacher_last_name: "Morales"})
const teacher7 = new TeachersModel({teacher_first_name: "Ivanna", teacher_last_name: "Quero"})
const teacher8 = new TeachersModel({teacher_first_name: "Annabella", teacher_last_name: "Tremus"})
const teacher9 = new TeachersModel({teacher_first_name: "Paola", teacher_last_name: "Fama"})
const teacher10 = new TeachersModel({teacher_first_name: "Jazlin", teacher_last_name: "Molina"})


const marks1 = new MarksModel({date:("2023-05-12"), mark: 9, student_first_name: "Rosario", student_last_name: "Lopez", group_name: "lider", subject_name: "Arte", teachers: [teacher2]})
const marks2 = new MarksModel({date:("2023-07-10"), mark: 6, student_first_name: "Pennelope", student_last_name: "Herrera", group_name: "aventureros", subject_name: "Musica", teachers: [teacher1, teacher9]})
const marks3 = new MarksModel({date:("2023-08-19"), mark: 10, student_first_name: "Carlos", student_last_name: "Hidalgo", group_name: "escuadron", subject_name: "Teatro", teachers: [teacher4]})
const marks4 = new MarksModel({date:("2022-09-25"), mark: 5, student_first_name: "Mario", student_last_name: "Villanueva", group_name: "lider", subject_name: "Cine", teachers: [teacher5, teacher7]})
const marks5 = new MarksModel({date:("2022-10-16"), mark: 8, student_first_name: "Margarita", student_last_name: "Villalba", group_name: "aventureros", subject_name: "topografia", teachers: [teacher3]})
const marks6 = new MarksModel({date:("2022-04-17"), mark: 9, student_first_name: "Nohemith", student_last_name: "Flores", group_name: "guerreros", subject_name: "Vialidad", teachers: [teacher6, teacher10]})
const marks7 = new MarksModel({date:("2022-02-18"), mark: 4, student_first_name: "Noel", student_last_name: "Sanchez", group_name: "lider", subject_name: "Anatomia", teachers: [teacher8, teacher3]})
const marks8 = new MarksModel({date:("2021-11-19"), mark: 7, student_first_name: "Mariano", student_last_name: "Diaz", group_name: "aventureros", subject_name: "Baile", teachers: [teacher9, teacher10]})
const marks9 = new MarksModel({date:("2021-08-20"), mark: 7, student_first_name: "Santiago", student_last_name: "Bravo", group_name: "escuadro", subject_name: "Fisica", teachers: [teacher1, teacher4]})
const marks10 = new MarksModel({date:("2021-06-21"), mark: 6, student_first_name: "Angel", student_last_name: "Bocourt", group_name: "guerreros", subject_name: "Quimica", teachers: [teacher5]})



// TeachersModel.insertMany([teacher1, teacher2, teacher3, teacher4, teacher5, teacher6, teacher7, teacher8, teacher9, teacher10])
//         .then((result) => {
//               console.log("Profesores guardados correctamente");
//               console.log(result);
//               mongoose.disconnect();

//      })
//       .catch((err) => {
//           console.error(err);
//      });


// MarksModel.insertMany([marks1, marks2, marks3, marks4, marks5, marks6, marks7, marks8, marks9, marks10])
//      .then((result) => {
//            console.log("Notas guardadas correctamente");
//            console.log(result);
//            mongoose.disconnect();
//     })
//     .catch((err) => {
//       console.error(err);
//     });



/* Calcular la nota media de los alumnos de una asignatura concreta */

// MarksModel.aggregate([{$match:{subject_name: "Arte"}},
//                      {$group:{_id: null, NotaMedia: {$avg: "$mark"}}}
//                     ])
//                     .then((result) =>{
//                         console.log(result);
//                     })
//                     .catch((error) =>{
//                         console.log(error);
//                     });


/* Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos */

// MarksModel.aggregate([{$group:{_id: null, TotalAlumnos: {$sum:1}}}
//                     ])
//                     .then((result) =>{
//                         console.log(result);
//                     })
//                     .catch((error) =>{
//                         console.log(error);
//                     });



/* Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos */

// MarksModel.aggregate([{$project:{
//                                  student_first_name: 1,
//                                  student_last_name: 1, 
//                                  _id: 0,}}
//                     ])
//                     .then((result) =>{
//                         console.log(result);
//                     })
//                     .catch((error) =>{
//                         console.log(error);
//                     });


/* Listar el nombre y los apellidos de todos los profesores incluyendo repetidos */

// TeachersModel.aggregate([{$project:{
//                                     teacher_first_name: 1,
//                                     teacher_last_name: 1, 
//                                     _id: 0,}}
//                                 ])
//                                 .then((result) =>{
//                                 console.log(result);
//                                 })
//                                 .catch((error) =>{
//                                 console.log(error);
//                                 });



/* Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto */

// MarksModel.aggregate([{$group: {_id: "$group_name", TotalAlumnos: {$sum:1}}},
//                       {$sort: {_id: -1}},
//                     ])
//                     .then((result) =>{
//                                       console.log(result);
//                                     })
//                     .catch((error) =>{
//                                       console.log(error);
//                                      });


                                     
/* Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5 */


// MarksModel.aggregate([{$group: {_id: "$subject_name", "NotaMedia": {$avg: "$mark"}}},
//                       {$match: {"NotaMedia":{"$gt": 5}}},
//                       {$sort: {"NotaMedia": -1}},
//                       {$limit: 5}

//                     ])
//                     .then((result) =>{
//                                       console.log(result);
//                                     })
//                     .catch((error) =>{
//                                       console.log(error);
//                                      });




/* Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos */

// MarksModel.aggregate([{$unwind: "$teachers"},
//                       {$group:{_id: "subject_name", "Profesores por Asignaturas": {$sum:1}}}
//                     ])
//                     .then((result) =>{
//                         console.log(result);
//                     })
//                     .catch((error) =>{
//                         console.log(error);
//                     });