const Transacion = require("../models/transaction");


async function getTransactions(req, res) { 
  const ci=req.params.ci
    console.log(req.params)   
    response = await Transacion.find({ci});
    res.status(200).send(response);
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
  getTransactions,
  createTransaction,
  updateClient,
  deleteClient,
};
