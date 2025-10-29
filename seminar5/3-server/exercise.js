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

router.route("/getResource/:id").get((req, res) => {
    const id = parseInt(req.params.id)
    const resource = array.find(item => item.id === id)
    if (resource) {
        res.json(resource)
    } else {
        res.status(404).json({ message: "Resource not found" })
    }
})

let port = 8000
app.listen(port)

console.log("API is running")
