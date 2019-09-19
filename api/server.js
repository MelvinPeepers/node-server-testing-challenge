const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

const Avengers = require("../avengers/avengers-Model.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/avengers", (req, res) => {
  Avengers.getAll()
    .then(avengers => {
      res.status(200).json(avengers);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
