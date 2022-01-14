const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = require('cross-fetch')
const asynchandler = require('express-async-handler')
const formData = require('express-form-data')
const mongodb = require('mongodb')
const config = require('./index')
const MongoClient = mongodb.MongoClient
const client = new MongoClient("mongodb://localhost:27017")
const port = '8080'


client.connect(function(err){
    if(err){throw new Error(err)}
   const db = client.db('junelyDB')
   const students = db.collection('students')

   students.insertOne({
        dob: "2-25-1000",
        name: "Austin",
        hobbies: ["coding", "music production"]
   }, (err, data) => {
    students.find({}).toArray((err, data) => {
        console.log(data)
    })
   })

   
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(formData.parse())
app.use(express.json())


const pets = require('./data/pets.json')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.status(200)
    res.render('home', {data: pets})
})

async function loadPosts() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json()
}

app.get('/posts', async (req, res) => {
    const posts = await loadPosts(); 
    res.render('posts', {data: posts})
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

app.get('/addCat', (req, res) => {
    res.render('addcat')
})

app.get('/addBreed', (req, res) => {
    res.render('addbreed')
})

app.get('/editCat', (req, res) => {
    console.log(req.query.message)
    res.render('editcat', req.query)
    
}) 

app.post('/editCat', (req, res) => {
    // console.log(req.body)
    res.redirect('/editCat?message=Successfully submitted.')
})

app.get('/login', (req, res) => {
    console.log(req.query.message)
    res.render('login')
    
}) 

app.post('/login', (req, res) => {
    
    const {email, password} = req.body

    console.log(email)
    console.log(password)

    if(email && password){
        res.redirect('/')
    }else{
        res.render('login', {message: 'Invalid email or password'})
    }
})



app.get('/catShelter', (req, res) => {
    res.render('catshelter')
})



app.listen(port, () => {
    console.log(`Express running on port: ${port}`)
})