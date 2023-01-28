const appRoot = require("app-root-path");
const express = require("express");
const cors = require("cors");

const userRoutes = require(appRoot+'/routes/userRoutes')

const app = express();

const uri = process.env.DB_URL||'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.4mifl.mongodb.net/project?retryWrites=true&w=majority'
const Port = process.env.PORT||9000

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


// routes
app.use('',userRoutes.router)

// db
// ----------------------------------------------------------------------

require(appRoot+"/helpers/mongodbHelper.js").database(uri)


// ---------------------------------------------------




app.listen(Port,() => {
    console.log(`Server started on localhost:${Port}`)
}) 