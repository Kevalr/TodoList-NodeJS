// require the libbrary
const mongoose = require('mongoose');

//dont write localhost - it will not work, always write 127.0.0.1 
const mongoDB_URL = 'mongodb://127.0.0.1:27017';
const database_Name = 'todo-list';


const db = async() => {
  //Trying to Connect with database
    try {
      const con = await mongoose.connect(`${mongoDB_URL}/${database_Name}`);
      console.log("mongodb connected : ", con.connection.host);
  }  catch(error) {
    //logging error if occurs while connecting to database
    console.error('error : ', error);
  }
}

module.exports = db;