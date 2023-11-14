const express = require("express");
const app = express();
const port = 3000;



const products = require('./routes/productRoutes') //for produceRoutes
const branches = require('./routes/branchRoutes') //for branchRoutes
const employees = require('./routes/employeeRoutes') //for employeeRoutes


const bodyParser = require("body-parser");

app.use(express.static("./styles"));
app.use(express.static('public'));


//middleware
app.use('/api/products', products)
app.use('/api/branches', branches);
app.use('/api/employees', employees);

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index');
})



// //home route
app.get("/", (req, res) => {
  res.send("HOME PAGE: SBA 318 - Express Server Application");
});

// Error Handling Middleware
app.use((req, res) => {
  res.status(404);
  res.json({ error: "Resource not found" });
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

