const Transaction = require("../models/transaction");
const mongoose = require('mongoose');

async function getVerificateTransaction(req, res) {
  const { transactionid } = req.params;
  if (!mongoose.Types.ObjectId.isValid(transactionid)) {
    return res.status(400).send({ msg: "El codigo no es válido" });
  }
  try {
    const response = await Transaction.findById(transactionid);

    if (!response) {
      return res.status(400).send({ msg: "Verifique el código" });
    } else {
      console.log(response);
      return res.status(200).send({
        course: response.course,
        clientname: response.clientname,
        clientci: response.clientci
      });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).send({ msg: "Error en el servidor" });
    
  }
}

async function getTransactions(req, res) { 
  const clientid=req.params.clientid;
    console.log(clientid)     
    try {
      const transactions = await Transacion.find({clientid:clientid});      
      if (transactions) {
        console.log(transactions)
        res.status(200).send(transactions);
      } else {
        res.status(404).send({msg:'usuario no encontrado'});
      }
    } catch (error) {
      res.status(500).send({msg:'se produjo un error'});
      // Manejar el error, si es necesario
    }
    
}

async function createTransaction(req, res) {
  const date= new Date()
  const {price}=req.body
  const precio=parseInt(price)
    const transaction = new Transacion({...req.body,price:precio,date}); 
    
    console.log(transaction)
    transaction.save((error, transacionStored) => {
      if (error) {
        res.status(400).send({ msg: "Error al crear la transaccion" });
      } else {
        res.status(201).send(transacionStored);
      }
    });
  
}

async function updateClient(req, res) {
  const { id } = req.params;
  const clientData = req.body;
  Transacion.findByIdAndUpdate({ _id: id }, clientData, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al actualizar el cliente" });
    } else {
      res.status(200).send({ msg: "Actualizacion correcta" });
    }
  });
}

async function deleteClient(req, res) {
  const { id } = req.params;
  Transacion.findByIdAndDelete(id, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al eliminar el cliente" });
    } else {
      res.status(200).send({ msg: "Cliente eliminado" });
    }
  });
}

module.exports = { 
  getVerificateTransaction,
  getTransactions,
  createTransaction,
  updateClient,
  deleteClient,
};
