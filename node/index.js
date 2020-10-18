const http = require('http');
const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(bodyParser.json());


const hostname = 'localhost';
const port = 8000;
const  Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'babul98', {
  host: 'localhost',
  dialect:  'mysql',
  port:'1433'
});

const testdata = sequelize.define("student", {
    admn_no: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    course_id: {
      type: Sequelize.STRING
    },
    branch_id: {
      type: Sequelize.STRING
    }
  },{
    freezeTableName: true,
    timestamps: false
  });









app.post('/',(req,res,next)=>{
  console.log(req.body);
 testdata.create(req.body).then(() => {
    console.log("succes");
  }).catch((err)=>{console.log(err);});

  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader('Content-Type', 'text/html');
  res.end('hii');

});


const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
