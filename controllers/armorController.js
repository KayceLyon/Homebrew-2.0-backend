const express = require('express');
const armor = express.Router();
const Armor = require('../models/armor')

// CREATE Armor
armor.post('/', (req, res)=>{
    Armor.create(req.body, (err, createArmor)=>{
        res.json(createArmor)
    })
})

// GET Armor
armor.get('/', (req, res)=>{
    Armor.find({}, (err, getArmor)=>{
        res.json(getArmor)
    })
})

// SHOW Armor
armor.get('/:id', (req, res)=>{
    Armor.findById(req.params.id, (err, getArmor)=>{
        res.json(getArmor)
    })
})

// EDIT Armor 
armor.get('/edit/:id', (req, res)=>{
    Armor.findById(req.params.id, (err, editArmor)=>{
        res.json(editArmor)
    })
})

// UPDATE Armor
armor.put('/:id', (req, res)=>{
    Armor.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateArmor)=>{
        res.json(updateArmor)
    })
})

// DELETE Armor
armor.delete('/:id', (req, res)=>{
    Armor.findByIdAndRemove(req.params.id, (err, deleteArmor) =>{
        res.json(deleteArmor)
    })
})

module.exports = armor;
