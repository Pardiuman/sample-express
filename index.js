const express =  require("express");
const serverless = require("serverless-http");
const app = express()


app.use(express.json());


app.get("/", (req,res) => {
  res.send("root page");
});

app.get("/contact", (req,res) => {
  res.send("contact us page");
});


app.get("/about", (req,res) => {
  res.send("about us  page");
});


module.exports.handler = serverless(app);

