const express = require("express");
const app = express();
const mogoose = require("mongoose");
const cors = require('cors');
const routesUrl = require('./routes/router')
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(express.json());
app.use(cors());
app.use(cors(corsOptions));
mogoose.connect(
  "mongodb+srv://Hlalele:HlaleleMaroba@crud.ht6dtyo.mongodb.net/?retryWrites=true&w=majority"
);

app.use('/app' , routesUrl)
app.listen(6000, () => {
  console.log("Server Is Up");
});
