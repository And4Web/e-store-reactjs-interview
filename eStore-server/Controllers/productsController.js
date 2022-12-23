const database = require("../Database");

exports.getCategoriesController = (req, res) => {
  let appData = {
    isError: false,
    data: [],
  };
  database.connection.getConnection((err, connection) => {
    if(err){
      appData.isError = true;
      appData.data = err;
      return res.status(500).json(appData);
    } else {
      connection.query('select * from categories', (err, rows)=>{
        if(err){
          appData.isError = true;
          appData.data = err;
          return res.status(500).json(appData);
        } else {
          appData.data = rows;
          return res.status(200).json(appData);
        }
      })
    }
  })
}

exports.getProductsController = (req,res) => {
  let appData = {
    isError: false,
    data: []
  }
  database.connection.getConnection((err, connection)=>{
    if(err){
      appData.isError = true;
      appData.data = err;
      return res.status(500).json(appData);
    } else {
      connection.query("select * from products", (error, row)=>{
        if(error){
          appData.isError = true;
          appData.data = error;
          return res.status(500).json(appData);
        } else {
          appData.data = row;
          return res.status(200).json(appData);
        }
      })
    }
  })
}