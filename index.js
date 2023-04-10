const userRoute = require('./routes/usuarios');
const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());

userRoute(app);

app.listen(port);


console.log("mi primer api con nodejs a qui");