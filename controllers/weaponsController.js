const express = require('express');
const weapons = express.Router();
const Weapon = require('../models/weapons')

// CREATE Weapon
weapons.post('/', (req, res)=>{
    Weapon.create(req.body, (err, createWeapon)=>{
        res.json(createWeapon)
    })
})

// GET Weapon
weapons.get('/', (req, res)=>{
    Weapon.find({}, (err, getWeapon)=>{
        res.json(getWeapon)
    })
})

// SHOW Weapon
weapons.get('/:id', (req, res)=>{
    Weapon.findById(req.params.id, (err, getWeapon)=>{
        res.json(getWeapon)
    })
})

// EDIT Weapon 
weapons.get('/edit/:id', (req, res)=>{
    Weapon.findById(req.params.id, (err, editWeapon)=>{
        res.json(editWeapon)
    })
})

// UPDATE Weapon
weapons.put('/:id', (req, res)=>{
    Weapon.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateWeapon)=>{
        res.json(updateWeapon)
    })
})

// DELETE Weapon
weapons.delete('/:id', (req, res)=>{
    Weapon.findByIdAndRemove(req.params.id, (err, deleteWeapon) =>{
        res.json(deleteWeapon)
    })
})

module.exports = weapons;
