let mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ana:accamaluemno@cluster0.1b9cctn.mongodb.net/Colegio",
                {useNewUrlParser: false, useUnifiedTopology: false});


const teachersSchema = new mongoose.Schema({
                    
                    firstName: String,
                    lastName: String,
                    groups: [String],
                
                });
                                  
const subjectsSchema = new mongoose.Schema({
                                    
                    title: String,
                    teachers: [teachersSchema]
                                  
                });
                                 
const marksSchema = new mongoose.Schema({
                                   
                    date: Date,
                    mark: Number,
                    subjects: [subjectsSchema]
                                  
                });
                                 
const studentsSchema = new mongoose.Schema({
                                    
                    firstName: String,
                    lastName: String,
                    marks: [marksSchema]
                                 
                });    


let TeachersModel = mongoose.model('teachers', teachersSchema);
let SubjectsModel = mongoose.model('subjects', subjectsSchema);
let MarksModel = mongoose.model('marks', marksSchema);
let StudentsModel = mongoose.model('students', studentsSchema);



let teacher1 = new TeachersModel ({firstName: "Patricia", lastName: "Perez", groups: ["a", "b"]});
let teacher2 = new TeachersModel ({firstName: "Gael", lastName: "Linarez", groups: ["c", "a"]});
let teacher3 = new TeachersModel ({firstName: "Alaia", lastName: "Diaz", groups: ["b", "d"]});
let teacher4 = new TeachersModel ({firstName: "Ignacio", lastName: "Palencia", groups: ["d", "e"]});




let subject1 = new SubjectsModel ({title: "Biologia", teachers: [teacher1]});
let subject2 = new SubjectsModel ({title: "Quimica", teachers: [teacher2]});
let subject3 = new SubjectsModel ({title: "Lengua y Literatura", teachers: [teacher3]});
let subject4 = new SubjectsModel ({title: "Fisica", teachers: [teacher4]});



let mark1 = new MarksModel ({date: "2020-02-01", mark: 5, subjects: [subject1]});
let mark2 = new MarksModel ({date: "2020-05-15", mark: 9, subjects: [subject2]});
let mark3 = new MarksModel ({date: "2020-02-20", mark: 6, subjects: [subject3]});
let mark4 = new MarksModel ({date: "2020-05-27", mark: 7, subjects: [subject4]});



let student1 = new StudentsModel ({firstName: "Christina", lastName: "Bravo", marks: [mark1, mark3]});
let student2 = new StudentsModel ({firstName: "Marcos", lastName: "Jimenez", marks: [mark2, mark4]});
let student3 = new StudentsModel ({firstName: "Pablo", lastName: "Salas", marks: [mark4, mark3]});
let student4 = new StudentsModel ({firstName: "Cristian", lastName: "Leal", marks: [mark1, mark2]});


// TeachersModel.insertMany([teacher1, teacher2, teacher3, teacher4])
//         .then(function(result) {
//               console.log("Profesores guardados correctamente");
//               console.log(result);
//               mongoose.disconnect();

//      })
//       .catch(function(err) {
//           console.error(err);
//      });


// SubjectsModel.insertMany([subject1, subject2, subject3, subject4])
//         .then(function(result) {
//              console.log("Asignaturas guardadas correctamente");
//              console.log(result);
//              mongoose.disconnect();
//      })
//       .catch(function(err) {
//             console.error(err);
//      });



// MarksModel.insertMany([mark1, mark2, mark3, mark4])
//      .then((result) => {
//            console.log("Notas guardadas correctamente");
//            console.log(result);
//            mongoose.disconnect();
//     })
//     .catch((err) => {
//       console.error(err);
//     });


// StudentsModel.insertMany([student1, student2, student3, student4])
//         .then(function(result) {
//               console.log("Estudiantes guardados correctamente");
//               console.log(result);
//               mongoose.disconnect();
//         })
//         .catch(function(err) {
//               console.error(err);
//         });    

/* Mostrar todas las notas de un alumno */

//   StudentsModel.findOne({firstName: "Marcos", lastName: "Jimenez"})
//                .then(student => {
//                     console.log(`Notas de ${student.firstName} ${student.lastName}:`);
//                     for (const mark of student.marks) {
//                         console.log(`- Fecha: ${mark.date}, Nota: ${mark.mark}`);
//                     }
//                     mongoose.disconnect();
//                     })
//                     .catch(error => {
//                         console.error("Error al buscar el estudiante:", error);
//                     });
         
/* Mostrar todas las asignaturas de un alumno */   
           

    // StudentsModel.findOne({ firstName: "Christina", lastName: "Bravo" })
    // .then(student => {
    //     console.log(`Asignaturas de ${student.firstName} ${student.lastName}:`);
    //     for (let i = 0; i < student.marks.length; i++) {
    //         console.log(`- Asignatura: ${student.marks[i].subjects[0].title}`);
    //     }
    //     mongoose.disconnect();
    // })
    // .catch(error => {
    //     console.error("Error al buscar el estudiante:", error);
    // });



/* Mostrar todos los profesores de un alumno */

// StudentsModel.findOne({ firstName: "Christina", lastName: "Bravo" })
//     .then(student => {
//         console.log(`Profesores de ${student.firstName} ${student.lastName}:`);

//         for (const mark of student.marks) {
//             const subjects = mark.subjects;

//             for (const subject of subjects) {
//                 const teachers = subject.teachers;

//                 for (const teacher of teachers) {
//                     console.log(`- Profesor: ${teacher.firstName} ${teacher.lastName}`);
//                 }
//             }
//         }
//         mongoose.disconnect();
//     })
//     .catch(Error => {
//         console.log(Error);
//     });