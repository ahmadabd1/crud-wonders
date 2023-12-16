const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

const api = require('./server/routes/api')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', api)

app.get("/items/:id", (req, res)=>{
    if (!req.params.id){
        return res.status(404).send("Item not found")
    } else {
        return res.send("ID OK") // will return status 200, the default one
    }
})



const port = 1337 //because why not
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})
// in the api.js
// const wonders = [
//     { name: "Mount Everest", location: "Nepal", visited: false },
//     { name: "Grand Canyon", location: "Arizona", visited: false },
//     { name: "Botanical Gardens", location: "Singapore", visited: true },
//     { name: "Pantheon", location: "Greece", visited: false },
//     { name: "Colosseum", location: "Italy", visited: true }
// ]
// //get-> show
// app.get('/wonders', function (req, res) {
//     res.send(wonders)
// })

// //create 
// app.post('/wonder', function (req, res) {
//     console.log("Someone's trying to make a post request")
//     // console.log(req.body)
//     // req.body.visited = true
//     // wonders.push(req.body)
//     wonders.push({ name: req.body.name, location: req.body.location, visited: true })
//     res.end()
// })


// app.put('/wonder/:name', function (req, res) {
//     console.log(req.params.name)
//     let wonder = req.params.name
//     wonders.find(w => w.name === wonder).visited = true
//     res.end()// don't forget to end the cycle!

// })

// app.delete('/wonder/:name', function (req, res) {
//     let wonder = req.params.name
//     let wondersIndex = wonders.findIndex(w => w.name === wonder)
//     wonders.splice(wondersIndex, 1)
//     res.end()
// })


