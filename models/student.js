const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    _id:Number,
    name:{
        fName:{type:String, required:true},
        sName:String,
        fLastName:String,
        sLastName:String
    },
    career:String,
    movil:Number,
    inProyect:[Date],
    proyect:[Number]
})


// para tener en cuenta:
// date: { type: Date, default: Date.now },

//crear el modelo

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;