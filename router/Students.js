const express = require('express');
const router = express.Router();

const Student = require('../models/student');

router.get('/', async(req, res) => {

    try {

        const arrayStudents = await Student.find();
        console.log(arrayStudents);
        //console.log("el id es: " + arrayStudents[1][1])
        
        // funcion para ordenar por el id el array
        function comparar(a, b) {
            return a._id - b._id;
          }
        //console.log("Aqui empieza el array ordenado");
        //console.log(arrayStudents.sort(comparar));

        res.render("students", {
            arrayStudent: arrayStudents.sort(comparar)
        })
        
    } catch (error) {
        console.log(error);
    }

/*
    res.render("mascotas", {
        arrayMascotas: [
            {id: 'jashf', nombre: 'rex', descripcion:'rex descripcion'},
            {id: 'jashfh', nombre: 'chanchan', descripcion:'chanchan descripcion'},
        ]
    })
*/
})

module.exports = router;