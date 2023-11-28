const express = require("express");
const TransactionController = require("../controllers/transaction");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.get("/transaction", TransactionController.getTransactions);
api.post("/transaction", TransactionController.createTransaction);
// api.patch("/client/:id",[md_auth.asureAuth],TransactionController.updateClient);
// api.delete("/client/:id", [md_auth.asureAuth], TransactionController.deleteClient);

module.exports = api;
