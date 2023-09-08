const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

//middleware
app.use(cors());
app.use(morgan("dev"));

//middleware propio
// app.use((req, res, next) => {
// console.log("Entre al middleware personalizado", req.url)
// next()
// })
// app.use((req, res, next) => {
//  console.log("Entre al middleware personalizado", req.url)
//  res.send("hiciste algo mal")
//  })

//Routes
app.use("/contador", require("./Routes/contador.routes"));

app.use((req, res) => {
  //no va next porq esta abajo de todo
  res.sendStatus(404);
});

//Config - STARTING SERVER
app.listen(4000);

