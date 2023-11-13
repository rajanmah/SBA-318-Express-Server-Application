const express = require ('express');
const router = express.Router();

const branches = require('../data/branches');


//INDEX - GET -getting all the users
router.get("/", (req, res) => {
    res.json(branches);
  });
  //SHOW - GET - get one user
  router.get("/:code", (req, res, next) => {
    //find the user id
    const branch = branches.filter((u) => u.code == req.params.code);
  
    console.log(branch);
    //if the user exists display the json data
    if (branch) res.json(branch);
    else next();
  });

module.exports = router;