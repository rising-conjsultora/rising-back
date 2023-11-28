const express = require("express");
const TransactionController = require("../controllers/transaction");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/transaction", TransactionController.createTransaction);
api.get("/transaction/:ci",[md_auth.asureAuth,md_auth.roleAuth], TransactionController.getTransactions);


// api.patch("/client/:id",[md_auth.asureAuth],TransactionController.updateClient);
// api.delete("/client/:id", [md_auth.asureAuth], TransactionController.deleteClient);

module.exports = api;
