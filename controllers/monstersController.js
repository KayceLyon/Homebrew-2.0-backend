const express = require('express');
const monsters = express.Router();
const Monster = require('../models/monsters')

// CREATE Monster
monsters.post('/', (req, res)=>{
    Monster.create(req.body, (err, createMonster)=>{
        res.json(createMonster)
    })
})

// GET Monster
monsters.get('/', (req, res)=>{
    Monster.find({}, (err, getMonster)=>{
        res.json(getMonster)
    })
})

// SHOW Monster
monsters.get('/:id', (req, res)=>{
    Monster.findById(req.params.id, (err, getMonster)=>{
        res.json(getMonster)
    })
})

// EDIT Monster 
monsters.get('/edit/:id', (req, res)=>{
    Monster.findById(req.params.id, (err, editMonster)=>{
        res.json(editMonster)
    })
})

// UPDATE Monster
monsters.put('/:id', (req, res)=>{
    Monster.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateMonster)=>{
        res.json(updateMonster)
    })
})

// DELETE Monster
monsters.delete('/:id', (req, res)=>{
    Monster.findByIdAndRemove(req.params.id, (err, deleteMonster) =>{
        res.json(deleteMonster)
    })
})

module.exports = monsters;
