const express = require('express');
const router = express.Router();

router.route('/getProducts').get((req, res)=>{
  let appData = {
    isError: false,
    data: []
  }
  res.status(200).json(appData);
})

module.exports = router;