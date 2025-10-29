//How to create a simple node.js server

//We need npm install express, npm install body-parser, npm install cors

let express = require('express') // we do this to implement the install packages into our project
let bodyParser = require('body-parser')
let cors = require('cors')

let app = express()
let router = express.Router() //creating a router because if we have GET and POST we need 2 routes

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use("/api", router)

const array = [
    { id: 1, name: "Alex", age: 25 },
    { id: 2, name: "Maria", age: 19 },
    { id: 3, name: "Ana", age: 22 }
]

router.route("/getList").get((req, res) => {
    res.json(array)
})

router.route("/postList").get((req, res) => {
    let el = req.body
    array.push(el)
    res.json(el)
})

let port = 8000
app.listen(port)

console.log("API is running")

//to verify the GET and POST actions, we use Postman
// for GET: "http://localhost:8000/api/getList"
//for POST: "http://localhost:8000/api/getList"; select Body and raw buttons, select type JSON,
//and write the object and values then send
//insert this values into Postman
