const express = require ('express');
const router = express.Router();

const employees = require('../data/employees');


//INDEX - GET -getting all the users
router.get("/", (req, res) => {
    res.json(employees);
  });
  //SHOW - GET - get one user
  router.get("/:id", (req, res, next) => {
    //find the user id
    const employee = employees.find((u) => u.id == req.params.id);
  
    console.log(employee);
    //if the user exists display the json data
    if (employee) res.json(employee);
    else next();
  });

module.exports = router;