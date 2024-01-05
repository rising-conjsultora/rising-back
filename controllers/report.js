const Client = require("../models/client");
const Transaccion = require("../models/transaction");
const User = require("../models/user");
const Course = require("../models/course");



async function clientsReport(req, res) {    
    const response = await Client.find();
  
    const formattedResponse = response.map((client) => ({
      key: client._id.toString(),
      value: client._id.toString(),
      text: client.name 
    }));
  
  res.status(200).send(formattedResponse);
}

  


async function clientTransactions(req, res) {  
  const id= req.params.id  
  const response = await Transaccion.find({clientid:id}).populate('course').populate('seller');
  console.log(response)
  if(response.length!==0){
    const formattedResponse = response.map((transaction) => {
      const año = transaction.date.getFullYear();
      const mes = transaction.date.getMonth() + 1; 
      const dia = transaction.date.getDate();
      const fechaSeparada = `${dia < 10 ? '0' + dia : dia}-${mes < 10 ? '0' + mes : mes}-${año}`;
      return{
        curso: transaction.course.title,
        fecha: fechaSeparada,
        agente: transaction.seller.name,
        precio: transaction.price
      }
    });
    console.log(formattedResponse)
    res.status(200).send(formattedResponse);
  }
  else{
    console.log(response)
    res.status(200).send(response);
  }
}



async function coursesForReport(req, res) {    
  const response = await Course.find();
  const formattedResponse = response.map((course) => ({
    key: course._id.toString(),
    value: course._id.toString(),
    text: course.title 
  }));
res.status(200).send(formattedResponse);
}


module.exports = { 
  clientsReport,
  clientTransactions,
  coursesForReport
};
  