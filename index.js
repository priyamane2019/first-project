
const express = require("express");
const dotenv=require("dotenv")
const cors = require("cors");
const app = express();
const path = require("path");
dotenv.config({path: './config.env'});//type null > config.env ===> create config file
const PORT= 8000 || process.env.PORT;
app.use(express.json())
require('./db/conn')//IMPIMP...
app.use(cors({origin: "*"}))


app.use(require('./routes/auth'));
//Static files Read
app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '.client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`server load on ${PORT} port`);
})

