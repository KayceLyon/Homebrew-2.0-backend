const express = require('express');
const races = express.Router();
const Race = require('../models/races')

// CREATE Race
races.post('/', (req, res)=>{
    Race.create(req.body, (err, createRace)=>{
        res.json(createRace)
    })
})

// GET Race
races.get('/', (req, res)=>{
    Race.find({}, (err, getRace)=>{
        res.json(getRace)
    })
})

// SHOW Race
races.get('/:id', (req, res)=>{
    Race.findById(req.params.id, (err, getRace)=>{
        res.json(getRace)
    })
})

// EDIT Race 
races.get('/edit/:id', (req, res)=>{
    Race.findById(req.params.id, (err, editRace)=>{
        res.json(editRace)
    })
})

// UPDATE Race
races.put('/:id', (req, res)=>{
    Race.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateRace)=>{
        res.json(updateRace)
    })
})

// DELETE Race
races.delete('/:id', (req, res)=>{
    Race.findByIdAndRemove(req.params.id, (err, deleteRace) =>{
        res.json(deleteRace)
    })
})

module.exports = races;
