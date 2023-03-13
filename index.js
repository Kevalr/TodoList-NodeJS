const express = require('express');
const bodyParser = require ('body-parser');
const port = 3000;

const db = require("./config/mongoose");
db();

const app = express();

app.set('view engine','ejs');
app.set('views','./views');

// ----------------------- MiddleWares = STARTED ----------------------- //

//middleware for converting request data into key value form
app.use(express.urlencoded());
// app.use (bodyParser.json());
// app.use (bodyParser.urlencoded ({ extended: false }));
//middleware for accessing static files
app.use(express.static("assets"));

// ------------------ MiddleWares = FINISHED --------------------//

app.use('/', require('./routes'));

app.listen(port, function(error) {
    if(error) {
        console.log(`Error while starting a server: ${error}`);
        return;
    }
    console.log(`Server is running on port ${port}`);
})