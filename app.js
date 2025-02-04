require("dotenv").config()

const express =require("express");
const expressLayout = require('express-ejs-layouts')
const app = express();
const port = 3000 || process.env.PORT;
const connectDB = require('./server/config/db')

app.use(express.static('public'));
connectDB();
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');


app.use('/',require("./server/route/main"))

app.listen(port,()=>{{
    console.log(`The app is listening at port ${port}`)
}})
