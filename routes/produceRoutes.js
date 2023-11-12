const express = require ('express');
const router = express.Router();

const produces = require('../data/produces');


//INDEX - GET -getting all the users
router.get("/", (req, res) => {
    res.json(produces);
  });
  //SHOW - GET - get one user
  router.get("/:id", (req, res, next) => {
    //find the user id
    const produce = produces.find((u) => u.id == req.params.id);
  
    console.log(produce);
    //if the user exists display the json data
    if (produce) res.json(produce);
    else next();
  });

module.exports = router;