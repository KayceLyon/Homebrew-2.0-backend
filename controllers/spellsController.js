const express = require('express');
const spells = express.Router();
const Spell = require('../models/spells')

// CREATE Spell
spells.post('/', (req, res)=>{
    Spell.create(req.body, (err, createSpell)=>{
        res.json(createSpell)
    })
})

// GET Spell
spells.get('/', (req, res)=>{
    Spell.find({}, (err, getSpell)=>{
        res.json(getSpell)
    })
})

// SHOW Spell
spells.get('/:id', (req, res)=>{
    Spell.findById(req.params.id, (err, getSpell)=>{
        res.json(getSpell)
    })
})

// EDIT Spell 
spells.get('/edit/:id', (req, res)=>{
    Spell.findById(req.params.id, (err, editSpell)=>{
        res.json(editSpell)
    })
})

// UPDATE Spell
spells.put('/:id', (req, res)=>{
    Spell.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateSpell)=>{
        res.json(updateSpell)
    })
})

// DELETE Spell
spells.delete('/:id', (req, res)=>{
    Spell.findByIdAndRemove(req.params.id, (err, deleteSpell) =>{
        res.json(deleteSpell)
    })
})

module.exports = spells;
