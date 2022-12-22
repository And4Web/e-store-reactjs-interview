const database = require("../Database");

exports.getProductsControllers = (req, res) => {
  let appData = {
    isError: false,
    data: [],
  };
  database.connection.connect((err, connection) => {
    if(err){
      appData.isError = true;
      appData.data = err;
      return res.status(500).json(appData);
    } else {
      database.connection.query('select * from categories', (err, rows)=>{
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