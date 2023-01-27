const express = require('express');
const feats = express.Router();
const Feat = require('../models/feats')

// CREATE Feat
feats.post('/', (req, res)=>{
    Feat.create(req.body, (err, createFeat)=>{
        res.json(createFeat)
    })
})

// GET Feat
feats.get('/', (req, res)=>{
    Feat.find({}, (err, getFeat)=>{
        res.json(getFeat)
    })
})

// SHOW Feat
feats.get('/:id', (req, res)=>{
    Feat.findById(req.params.id, (err, getFeat)=>{
        res.json(getFeat)
    })
})

// EDIT Feat 
feats.get('/edit/:id', (req, res)=>{
    Feat.findById(req.params.id, (err, editFeat)=>{
        res.json(editFeat)
    })
})

// UPDATE Feat
feats.put('/:id', (req, res)=>{
    Feat.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateFeat)=>{
        res.json(updateFeat)
    })
})

// DELETE Feat
feats.delete('/:id', (req, res)=>{
    Feat.findByIdAndRemove(req.params.id, (err, deleteFeat) =>{
        res.json(deleteFeat)
    })
})

module.exports = feats;
