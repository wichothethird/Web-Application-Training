const express = require('express');

const app = express();
app.use(express.json());
//connect to database
const users = [];
/*
In Node JS we create what is calles ROUTES
These routes send back data to the user,
usually this data is from a database.


Below it is a example of route that will send the
client the data on the route
This is done using get() 

    Parameters 
    1. path (string)
    2. callback function (req, res)
*/
app.get('/Users',(req,res)=>{
    res.json(users);
    
});

//REMINDER: know the difference between CONST LET and VAR

//This is to POST into our database
//POST request are used to add data into our database
app.post('/Users',(req,res)=>{
    //we request for the username and password
    var user = {
        name : req.body.name,
        password : req.body.password
    }
    /*
        One on thing to note is that req has a 
    */
    
    users.push(user);
    res.status(201);
    res.send();
});
/*
application will listen on port 3000
*/
app.listen(3000);