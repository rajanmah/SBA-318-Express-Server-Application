const express = require("express");
const app = express();
const port = 3000;
// const cookieParser = require ('cookie-parser')



const produces = require('./routes/produceRoutes') //for produceRoutes
const bodyParser = require("body-parser");

app.use(express.static("./styles"));
app.use(express.static('public'));
// const fs = require ('fs');


//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/api/produces', produces)
// app.use('api/posts', posts)

app.set('view engine', 'ejs');
// app.set('views', home +'/views')

app.get('/', (req, res)=>{
    res.render('index');
})

// // defining the TEMPLATE ENGINE
// app.engine('store', (filepath, options, callback)=>{
//     fs.readFile(filepath,(err, content)=>{
//         if (err) return callback(err);

//         const rendered = content
//         .toString()
//         .replaceAll('#title#', `${options.title}`)
//         .replace('#content', `${options.content}`)
//         .replaceAll("footer", `${options.footer}`)

//         return callback(null, rendered);
//     })
// });

// app.set('views', './views');
// app.set('view engine', 'store')

// const logReq = (req, res, next)=>{
//     // console.log('request received');
//     next();
// }
// const validateCookies = async (req, res, next) =>{
//     await cookieValidator(req.cookies);
//     next();
// }

// const cookieValidator = async (cookies) => {
//     console.log(cookies);
//     return true;
// }

// //error handling middlware
// app.use((err, req, res, next)=> {
//     res.status(500).send(err.message)
// })

// app.use(logReq);
// app.use(cookieParser());
// app.use(validateCookies);


// app.get('/', (req, res)=>{
//     // res.send('HOME') //for template engine
//     const options = {
//         title: "Rendering Views with Express",
//         content:
//           "Here, we've created a basic template engine using <code>app.engine()</code> \
//           and the <code>fs</code> module, then used <code>res.render</code> to \
//           render this page using custom content within the template.<br><br> \
//           Generally, <strong>you won't want to create your own view </strong>engines, \
//           but it important to understand how they work behind the scenes. \
//           For a look at some popular view engines, check out the documentation for \
//           <a href='https://pugjs.org/api/getting-started.html'>Pug</a>, \
//           <a href='https://www.npmjs.com/package/mustache'>Mustache</a>, or \
//           <a href='https://www.npmjs.com/package/ejs'>EJS</a>. \
//           More complete front-end libraries like React, Angular, and Vue \
//           also have Express integrations.",
//           footer: "hello world copyright, 2010 - 2023",
          
//       };
    
//       res.render("index", options);
//     });



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

