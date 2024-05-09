const express = require('express');
const app = express();
const PORT = 3000;

const path = require("path");


app.use(express.static('public'));

app.get('/' , function(req,res) {
    res.send('Hello world');
});



app.listen(3000 , ()=>{
    console.log(`App is listening on port ${PORT}`);
})
