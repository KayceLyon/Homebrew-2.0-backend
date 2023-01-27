const express = require('express');
const subclasses = express.Router();
const Subclass = require('../models/subclasses')

// CREATE Subclass
subclasses.post('/', (req, res)=>{
    Subclass.create(req.body, (err, createSubclass)=>{
        res.json(createSubclass)
    })
})

// GET Subclass
subclasses.get('/', (req, res)=>{
    Subclass.find({}, (err, getSubclass)=>{
        res.json(getSubclass)
    })
})

// SHOW Subclass
subclasses.get('/:id', (req, res)=>{
    Subclass.findById(req.params.id, (err, getSubclass)=>{
        res.json(getSubclass)
    })
})

// EDIT Subclass 
subclasses.get('/edit/:id', (req, res)=>{
    Subclass.findById(req.params.id, (err, editSubclass)=>{
        res.json(editSubclass)
    })
})

// UPDATE Subclass
subclasses.put('/:id', (req, res)=>{
    Subclass.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateSubclass)=>{
        res.json(updateSubclass)
    })
})

// DELETE Subclass
subclasses.delete('/:id', (req, res)=>{
    Subclass.findByIdAndRemove(req.params.id, (err, deleteSubclass) =>{
        res.json(deleteSubclass)
    })
})

module.exports = subclasses;
