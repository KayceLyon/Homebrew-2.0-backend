const express = require('express');
const backgrounds = express.Router();
const Background = require('../models/backgrounds')

// CREATE Background
backgrounds.post('/', (req, res)=>{
    Background.create(req.body, (err, createBackground)=>{
        res.json(createBackground)
    })
})

// GET Background
backgrounds.get('/', (req, res)=>{
    Background.find({}, (err, getBackground)=>{
        res.json(getBackground)
    })
})

// SHOW Background
backgrounds.get('/:id', (req, res)=>{
    Background.findById(req.params.id, (err, getBackground)=>{
        res.json(getBackground)
    })
})

// EDIT Background 
backgrounds.get('/edit/:id', (req, res)=>{
    Background.findById(req.params.id, (err, editBackground)=>{
        res.json(editBackground)
    })
})

// UPDATE Background
backgrounds.put('/:id', (req, res)=>{
    Background.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateBackground)=>{
        res.json(updateBackground)
    })
})

// DELETE Background
backgrounds.delete('/:id', (req, res)=>{
    Background.findByIdAndRemove(req.params.id, (err, deleteBackground) =>{
        res.json(deleteBackground)
    })
})

module.exports = backgrounds;
