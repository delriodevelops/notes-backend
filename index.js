const express = require('express');
const logger = require('./LoggerMiddleware');
const cors = require('cors')
const notesRouter = require('./src/routes/notes')



//extraer
const connectionString = 'mongodb+srv://delrio:u12@notas.a3v4e.mongodb.net/?retryWrites=true&w=majority'
const mongoose = require('mongoose');

mongoose.connect(connectionString)
    .then(()=>console.log('Database to MongoDB Ok'))
    .catch(err=>console.error(err))
//extraer



const app = express();

app.use(cors())
app.use(logger)
app.use(express.json());




app.get('/', (req,res)=>{
    res.send('<h1>queee</h1>')
})

app.use('/api',notesRouter)





app.use((req,res)=>{
    res.status(404).json({
        error:'Not found'
    })
})

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log('server en https://evening-bastion-34691.herokuapp.com/' + PORT)
})