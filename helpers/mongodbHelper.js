const appRoot = require("app-root-path");
const mongoose = require('mongoose')


database=(url)=>{
     mongoose.set('strictQuery', true);
    mongoose.connect(url)//,{useNewUrlParser :true,useUnifiedTopology: true,useCreateIndex:true});
    mongoose.connection
      .once('open',() => {
            console.log('connected')
            // saveUsers()
      })
      .on('error', error=>
            {console.log("your error", error);});
}

module.exports.database = database

