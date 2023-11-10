const express = require ('express');
const bodyParser = require('body-parser')

const produces = require('./routes/produceRoutes')


const app = express();
const port = 3000;

// const produces =require('./data/produces')


// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
//use these routes
app.use('api/produces', produces)

//Home Route
app.get('/', (req, res)=>{
    res.send('HOME PAGE for SBA 318 NODE & EXPRESS')
})






// //error handling middleware
app.use((req, res)=>{
    res.status(404);
    // res.json({error: "Item not found"})
    res.json({error:'Why Item not found'})
});
app.listen(port, ()=>{
    console.log(`Server is listening on port :${port}`)
});