exports.getProductsControllers = (req, res)=>{
  let appData = {
    isError: false,
    data: []
  }
  res.status(200).json(appData);
}