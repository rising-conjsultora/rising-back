const express = require("express");
const TransactionController = require("../controllers/transaction");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/transaction", TransactionController.createTransaction);
api.get("/transaction/:clientid",[md_auth.asureAuth,md_auth.roleAuth], TransactionController.getTransactions);
api.get("/transactionverificate/:transactionid", TransactionController.getVerificateTransaction);

// api.patch("/client/:id",[md_auth.asureAuth],TransactionController.updateClient);
// api.delete("/client/:id", [md_auth.asureAuth], TransactionController.deleteClient);

module.exports = api;
