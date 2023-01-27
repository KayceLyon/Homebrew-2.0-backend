const express = require('express');
const items = express.Router();
const Item = require('../models/items')

// CREATE Item
items.post('/', (req, res)=>{
    Item.create(req.body, (err, createItem)=>{
        res.json(createItem)
    })
})

// GET Item
items.get('/', (req, res)=>{
    Item.find({}, (err, getItem)=>{
        res.json(getItem)
    })
})

// SHOW Item
items.get('/:id', (req, res)=>{
    Item.findById(req.params.id, (err, getItem)=>{
        res.json(getItem)
    })
})

// EDIT Item 
items.get('/edit/:id', (req, res)=>{
    Item.findById(req.params.id, (err, editItem)=>{
        res.json(editItem)
    })
})

// UPDATE Item
items.put('/:id', (req, res)=>{
    Item.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateItem)=>{
        res.json(updateItem)
    })
})

// DELETE Item
items.delete('/:id', (req, res)=>{
    Item.findByIdAndRemove(req.params.id, (err, deleteItem) =>{
        res.json(deleteItem)
    })
})

module.exports = items;
