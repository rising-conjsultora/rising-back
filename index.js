const mongoose = require("mongoose");
const app = require("./app");
const {
  IP_DATABASE,
  PORT_DB,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  IP_SERVER,
  // API_VERSION,
} = require("./constants");

const PORT = process.env.POST || 3977;

mongoose.connect(
  // `mongodb://${IP_DATABASE}:${PORT_DB}/rising`, 
  // `mongodb+srv://${DB_USER}:${PORT_DB}@${DB_HOST}`, 
  `mongodb+srv://risingconsultora:CarlaZarate123cy@rising.vvsv0r1.mongodb.net`, 
  (error) => {
    if (error) throw error;

    app.listen(PORT, () => {
      
      console.log("######################");
      console.log("###### API REST ######");
      console.log("######################");
      // console.log(`http://${IP_SERVER}:${PORT}/api/`);
      // console.log(`http://${IP_SERVER}:${PORT}/api/`);
      // console.log("######################");
      // console.log("######################");
      // console.log(` base de datos: mongodb+srv://${DB_USER}:${PORT_DB}@${DB_HOST}`);
    });
  }
);
