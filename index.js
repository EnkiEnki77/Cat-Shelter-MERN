const express = require('express')
const app = express()
const port = 2000

const pets = require('./data/pets.json')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.status(200)
    res.render('home')
})

app.get('/about', (req, res) => {
    res.status(200)
    res.render('about')
})

app.get('/about/:name/:lname', (req, res) => {
    res.status(200)
    res.send(`Welcome, ${req.params.name} ${req.params.name}`)
})

app.get('/data', (req, res) => {
    res.json(pets)
})

app.listen(port, () => {
    console.log(`Express running on port: ${port}`)
})