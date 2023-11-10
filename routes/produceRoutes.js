const express = require('express');
const router = express.Router();

const produces = require('../data/produces')

//GET - getting all produce json data
router.get('/', (req, res) => {
    res.json(produces)
})

// .post('/', (req, res)=>{
//     if(req.body)
// })

// GET -  showing each item
router.get('/:id', (req, res, next) => {
    const produce = produces.find((p) => p.id == req.params.id);
    // console.log(produce)
    if (produce) res.json(produce);
    else next();
});

module.exports = router;