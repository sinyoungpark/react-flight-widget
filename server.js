const PORT = 8000;
const axios = require("axios").default;
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();

const app = express();

const connection = mysql.createConnection({
  host : "localhost",
  user : process.env.USER_NAME,
  password : process.env.PASS_WORD,
  database : process.env.DATABASE
});

connection.connect();

app.use(cors());

app.get("/flights", (req,res) => {
  connection.query("SELECT * from flights", (error, rows, fields) => {
    if(error) throw error;
    res.status(200).json(rows.data);
  });
});

app.listen(PORT, () => {
  console.log(`running at port : ${PORT}`)
})