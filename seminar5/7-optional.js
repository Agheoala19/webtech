let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')

let app = express()
let router = express.Router()

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

router.route("/postList").post((req, res) => {
    const el = req.body
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

router.route("/updateResource/:id").put((req, res) => {
    const id = parseInt(req.params.id)
    const index = array.findIndex(item => item.id === id)

    if (index !== -1) {
        array[index] = { ...array[index], ...req.body }
        res.json({ message: "Resource updated", updated: array[index] })
    } else {
        res.status(404).json({ message: "Resource not found" })
    }
})

router.route("/deleteResource/:id").delete((req, res) => {
    const id = parseInt(req.params.id)
    const index = array.findIndex(item => item.id === id)

    if (index !== -1) {
        const deleted = array.splice(index, 1)
        res.json({ message: "Resource deleted", deleted: deleted[0] })
    } else {
        res.status(404).json({ message: "Resource not found" })
    }
})

let port = 8000
app.listen(port)
console.log("API is running on port", port)
