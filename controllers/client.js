const Client = require("../models/client");

// function getClients(req, res) {
  
//   const { page = 1, limit = 10 } = req.query;
//   const options = {
//     page: parseInt(page),
//     limit: parseInt(limit),
//     sort: { created_at: "desc" },
//   };
//   Client.paginate({}, options, (error, clientsStored) => {
//     if (error) {
//       res.status(400).send({ msg: "Error al obtener los clientes" });
//     } else {
//       res.status(200).send(clientsStored);
//     }
//   });
// }

async function getClients(req, res) {    
    response = await Client.find();
  res.status(200).send(response);
}

async function createClient(req, res) {
    const client = new Client({...req.body}); 
    client.save((error, clientStored) => {
      if (error) {
        res.status(400).send({ msg: "Error al crear el cliente" });
      } else {
        res.status(201).send(clientStored);
      }
    });
  
}

async function updateClient(req, res) {
  const { id } = req.params;
  const clientData = req.body;
  Client.findByIdAndUpdate({ _id: id }, clientData, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al actualizar el cliente" });
    } else {
      res.status(200).send({ msg: "Actualizacion correcta" });
    }
  });
}

async function deleteClient(req, res) {
  const { id } = req.params;
  Client.findByIdAndDelete(id, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al eliminar el cliente" });
    } else {
      res.status(200).send({ msg: "Cliente eliminado" });
    }
  });
}

module.exports = { 
  getClients,
  createClient,
  updateClient,
  deleteClient,
};
