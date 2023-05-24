const express = require('express')

const app = express()

app.use(express.json())

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2022-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2022-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2022-05-30T19:20:14.298Z",
        important: true
    }
]
// get post use
app.get('/', (req, res, next) => {
    res.send('<h1>hellow owld</h1>')
})
app.get('/api/notes/:id', (req, res, next) => {
    const id = Number(req.params.id)
    console.log(typeof id); //string
    const note = notes.find(note => note.id === id)
    if(note) {
        res.json(note)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/notes/:id',(req,res,next) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)
    res.status(204).end()
})


const genarateId = ()=> {
    const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0
    return maxId + 1
}
app.post('/api/notes', (req, res) => {
    const body = req.body
    if(!body.content) {
        return res.status(400).json({
            error: 'content mission'
        })
    }
    const note = {
        id: genarateId(),
        content: body.content,
        important: body.important || false,
        date: new Date()
    }
    console.log(note);
    notes = notes.concat(note)
    res.json(note)
})


app.get('/api/notes',(req,res,next) => {
    res.json(notes)
})
app.listen(3000, ()=> {
    console.log('app start ,3000 port listen');
})
