const express = require('express');
const app = express();
const mongoose = require('mongoose');


const PORT = 8000;
const mongoUrl = "mongodb+srv://ajinkyakawadesknit:ajinkya123@cluster0.8i4g9wk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoUrl).then(()=>{
    console.log("Database Connected")
}).catch((error)=>{
    console.log("Error in DB");
})

app.use(express.json())

const employeeRouter = require('./routes/employee');
app.use("/employee" , employeeRouter);

app.listen(PORT, ()=>{
    console.log(`App Connected at ${PORT}`);
})