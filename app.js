const express = require ("express")
const path = require('path');
const app = express();


app.use(express.static("public"));

app.get('/' , (req,res)=> {
    res.sendFile(path.join(__dirname,'src/views/home.html'))
})

app.get('/register' , (req,res)=> {
    res.sendFile(path.join(__dirname,'src/views/register.html'))
})

app.get('/login' , (req,res)=> {
    res.sendFile(path.join(__dirname,'src/views/login.html'))
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log("servidor iniciado"))