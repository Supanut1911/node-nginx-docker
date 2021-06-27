let express = require('express')
let app = express()
let products = [
    {
        id: "OBJ-001",
        name: "coffee"
    },
    {
        id: "OBJ-002",
        name: "bread"
    },
    {
        id: "OBJ-003",
        name: "cake"
    },
]


app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/products', (req, res) => {
    res.json(products)
})

app.listen(7788, () => {
    console.log('server running on 7788');
})