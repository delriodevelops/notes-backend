const express = require('express');
const router = express.Router();
const noteSchema = require('../models/notes');
const mongoose = require('mongoose')



//get all notes
router.get('/notes',(req,res)=>{
    noteSchema
        .find()
        .then(data=>res.json(data))
})

//get single note
router.get('/notes/:id',(req,res)=>{
    const {id} = req.params

    noteSchema
        .findById(id)
        .then(data=>res.json(data))
})

//delete single note
router.delete('/notes/:id',(req,res)=>{
    const {id} = req.params;
    noteSchema
        .deleteOne({_id:id})
        .then(data=>res.json(data))
})

//post note
router.post('/notes',(req,res)=>{
    
    const note = noteSchema(req.body)

    if(!note || !note.content){
        return res.status(400).json({
            error:'no hay contenido'
        })
    }  else {
        note
            .save()
            .then(data=>res.json(data))
            .catch(error=>console.log(error))
        res.status(201).json(note)

    }

})

//actualizar
router.put('/notes/:id',(req,res)=>{
    const {id} = req.params;
    const {content,date,important,completed}= req.body;
    const newTask = {content,date,important,completed};

    noteSchema
        .findByIdAndUpdate(id, newTask )
        .then(data=>res.json(data))

})


module.exports = router;