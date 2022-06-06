const express = require('express');
const logger = require('./LoggerMiddleware');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(logger)
app.use(express.json());



let notes = []


app.get('/', (req,res)=>{
    res.send('<h1>queee</h1>')
})
app.get('/api/notes',(req,res)=>{
    res.json(notes)
})

app.get('/api/notes/:id',(req,res)=>{
    const id = req.params.id

    const note = notes.find(prod=> prod.id == id)

    !!note ? res.json(note) : res.status(404).end()
})

app.delete('/api/notes/:id',(req,res)=>{
    const id = req.params.id
    notes = notes.filter(note=> note.id!=id)
    res.status(204).end()
})

app.post('/api/notes',(req,res)=>{
    const note = req.body

    if(!note || !note.content){
        return res.status(400).json({
            error:'no hay contenido'
        })
    }  else {
        const ids = notes.map(prod=>prod.id)
        const maxId = Math.max(...ids)  
        const newNote= {
            id: notes.length===0 ? 1 : maxId +1,
            content: note.content,
            date: new Date()
        }
    
        notes = [newNote,...notes];
        res.status(201).json(note)

    }

})

app.use((req,res)=>{
    res.status(404).json({
        error:'Not found'
    })
})

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log('server en http://localhost:' + PORT)
})