const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { API_VERSION } = require("./constants");

const app = express();

// Import routings
const authRoutes = require("./router/auth");
const userRoutes = require("./router/user");
const clientRoutes = require("./router/client")
const transactionRoutes= require("./router/transaction")


const menuRoutes = require("./router/menu");
const courseRoutes = require("./router/course");
const postRoutes = require("./router/post");
const newsletterRoutes = require("./router/newsletter");

// Configure Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure static folder
app.use(express.static("uploads"));

// Configure Header HTTP - CORS
app.use(cors());
app.use(`/api`, authRoutes);
app.use(`/api`, userRoutes);
app.use(`/api`, clientRoutes);
app.use(`/api`, transactionRoutes);

app.use(`/api`, courseRoutes);

app.use(`/api`, menuRoutes);
app.use(`/api`, postRoutes);
app.use(`/api`, newsletterRoutes);

module.exports = app;
