const express = require ("express")
const path = require('path');
const app = express();


app.use(express.static("public"));
app.get('/' , (req,res)=> {
    res.sendFile(path.join(__dirname,'src/views/home.html'))
})

app.get('/c' , (req,res)=> {
    res.send("hola")
})

app.listen(3000, () => console.log("servidor iniciado"))