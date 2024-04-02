var express = require('express');
var app = express();
const PORT = 2000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');

const mongodb_url = 'mongodb+srv://rashmikanth94:F66nSTn5YwARAv8V@cluster0.rrpksui.mongodb.net/newsApplication?authSource=admin';



app.listen(PORT, ()=>{
    console.log('App started running successfully on PORT:', PORT);
})

mongoose.connect( mongodb_url, 
    { useNewUrlParser: true }).then(()=>{
        console.log("Database connection established")
    }).catch((err) => {
        console.log("Some error occured in connecting to database! ", err);
    })

app.get('/users', (req, res)=> {
    const user = {
        userName:'Deepu',
        Gender: 'Vijay Krishna'
    }
    res.send(user);
})

app.post('/signIn',(req,res) => {
    console.log(req.body);
    res.send('Successfully signedIn');
})