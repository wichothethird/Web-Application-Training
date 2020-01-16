const express = require('express');
const mysql = require('mysql')

/*
 CREATE TABLE ticket(
  ticketNum int AUTO_INCREMENT,
  category VARCHAR(255),
  lastModifiedBy VARCHAR(255),
  model VARCHAR(255),
  status VARCHAR(255),
  dateCreate DATETIME,
  lastModified DATETIME,
  createdby VARCHAR(255),
  targetPrice DECIMAL(13, 2),
  totalInvestment DECIMAL(13, 2),
  image MEDIUMBLOB,
  condit VARCHAR(255),
  milage INT,
  manifactureYear INT,
  seats INT,
  description LONGTEXT,
  PRIMARY KEY (ticketNum)
)
 */

var database = mysql.createConnection({
    host:'localhost',
    user:'wicho',
    password:'1234',
    database:'webappdatabase'
}); 

//Connecting to MySQL Database 
database.connect((err) => {
    if (err) {
      throw err;
      return;
    }
    console.log('Connection WORKED!');
  });

const app = express();
app.use(express.json());

//This Route is just to create a table for the Ticket Object
app.get('/createTicketObject',(req,res)=>{
  
    let Query = 'CREATE TABLE tickets(ticketNum int AUTO_INCREMENT, category VARCHAR(255), lastModifiedBy VARCHAR(255), model VARCHAR(255), status VARCHAR(255), dateCreate DATETIME, lastModified DATETIME, createdby VARCHAR(255), targetPrice DECIMAL(13, 2), totalInvestment DECIMAL(13, 2), image MEDIUMBLOB, condit VARCHAR(255), milage INT, manifactureYear INT, seats INT, description LONGTEXT, PRIMARY KEY (ticketNum))';
    database.query(Query,(err,res,field)=>{
        if (err){throw err; return;}
        console.log("Table has been created!");

    });
    
});


//Post Request 
//data should be recieved in JSON format
app.post('/createTicket',(req,res)=>{

  let ticket = {

    category: req.body.category,
    lastModifiedBy: req.body.lastModified,
    model: req.body.model,
    status: req.body.status,
    dateCreate: req.body.dateCreate,
    lastModified: req.body.lastModified,
    createdby: req.body.createdby,
    targetPrice: req.body.targetPrice,
    totalInvestment: req.body.totalInvestment,
    image: req.body.image,
    condit: req.body.condit,
    milage: req.body.milage,
    manifactureYear: req.body.manifactureYear,
    seats: req.body.seats,
    description: req.body.description
  }
  let Query = "INSERT INTO tickets SET ?"
  database.query(Query,ticket,(err,res,field)=>{
  if (err){throw err; return;}
  console.log("Added the ticket!!");

  });

});




app.listen(3000);