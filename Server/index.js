'use strict';
const express = require('express');
const morgan = require("morgan");
const app = express();
const PORT = 3589

app.use(express.json());
app.use(morgan("tiny"))

// Endpoints

const { SignIn } = require("./Handlers/SignIn");
const { SignUp } = require("./Handlers/SignUp")


app.post("/api/signin", SignIn)
app.post("/api/signup", SignUp)

// 

app.listen(PORT, () => {
  console.log("Listening on port", PORT)
})