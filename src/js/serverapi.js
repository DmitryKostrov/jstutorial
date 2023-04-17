
const express = require('express')
const server = express();
let _users_data = [
    {
        "name": "Kiril",
        "age": 20
    },
    {
        "name": "Sveta",
        "age": 22
    },
    {
        "name": "Anton",
        "age": 26
    }
]
let test = {"name": "Atnon", "age": "22"}
server.get('/', (req, res) => res.send("It's work"));
server.get('/users', (req, res) => res.send(_users_data));
server.listen(3030,()=> console.log('Server start in port 3030'))
