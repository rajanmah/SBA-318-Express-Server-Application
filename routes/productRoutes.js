const express = require ('express');
const router = express.Router();
const products = require('../data/products');


//INDEX - GET -getting all the users
router.get("/", (req, res) => {
    res.json(products);
  });
  //SHOW - GET - get one user
  router.get("/:id", (req, res, next) => {
    //find the user id
    const product = products.find((u) => u.id == req.params.id);
  
    console.log(product);
    //if the user exists display the json data
    if (product) res.json(product);
    else next();
  });

module.exports = router;