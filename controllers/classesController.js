const express = require('express');
const classes = express.Router();
const ClassC = require('../models/classes')

// CREATE ClassC
classes.post('/', (req, res)=>{
    ClassC.create(req.body, (err, createClassC)=>{
        res.json(createClassC)
    })
})

// GET ClassC
classes.get('/', (req, res)=>{
    ClassC.find({}, (err, getClassC)=>{
        res.json(getClassC)
    })
})

// SHOW ClassC
classes.get('/:id', (req, res)=>{
    ClassC.findById(req.params.id, (err, getClassC)=>{
        res.json(getClassC)
    })
})

// EDIT ClassC 
classes.get('/edit/:id', (req, res)=>{
    ClassC.findById(req.params.id, (err, editClassC)=>{
        res.json(editClassC)
    })
})

// UPDATE ClassC
classes.put('/:id', (req, res)=>{
    ClassC.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateClassC)=>{
        res.json(updateClassC)
    })
})

// DELETE ClassC
classes.delete('/:id', (req, res)=>{
    ClassC.findByIdAndRemove(req.params.id, (err, deleteClassC) =>{
        res.json(deleteClassC)
    })
})

module.exports = classes;
