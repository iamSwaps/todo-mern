const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require("body-parser");
const {MongoClient} = require('mongodb')
const todo = require('./models/todo')

const PORT = process.env.PORT||5000
const mong = "mongodb://127.0.0.1:27017/"
const app = express()
dotenv.config()

const client = new MongoClient(mong);
const tododb = client.db("todo");
const todos = tododb.collection("todos");

async function connector(client){
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("db connected!")
    } catch (e) {
        console.error(e);
    }
}
connector(client).catch(console.error);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,  res)=> {
    res.send("/newTodo->POST, /allTodo->GET")
})

app.post('/newTodo', (req, res)=> {
    console.log(req.body)
    const newTodo = new todo(req.body._id,req.body.title, req.body.desc)
    const doc=JSON.parse(JSON.stringify(newTodo))
    todos.insertOne(doc, function (err, re){
        if (err) throw err;
        console.log("id-"+re.insertedId+" added")
    })
    res.sendStatus(200)
})

app.get('/allTodo', (req, res)=>{
    todos.find({}).toArray(function(err, result){
        if (err) throw err;
        console.log("- allTodo requested")
        res.send(result)
    })
})
   
app.delete('/delTodo/:_id', (req, res)=>{
    const doc = {
        _id:parseInt(req.params._id)
    }
    console.log(doc)
    todos.deleteOne(doc, function (err, re){
        if (err) throw err;
        console.log(re.deletedCount+" todo deleted")
    })
    res.send(200)
})

app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`)
})