var express = require("express")

var app = express();


app.use(logger("dev"))

const cookieParser = require("cookie-parser")

var logger = require("morgan")

app.use(express.json())

app.use(express.urlencoded({extended:false}))


app.use((req, res, next) => {
    res.cookie('username', "Arti");
    next();
  });
  
  app.use('/admin', (req, res, next) => {
    next('uncaught error');
  });


app.get("/form" ,(req,res)=>{
    res.sendFile(__dirname + '/form.html')
    })
  

    app.get("/users/:username",(req,res)=>{
        var username = req.params.username;
        res.send(username)
    })



app.post('/json', (req, res) => {
    res.send(req.body);
  });


app.get("/",(req,res)=>{
    res.send(`<h2>Welcome to express </h2>`)
    })

    app.get("/about", (req,res)=>{
        res.send("My name is qwerty")
    })
    

    app.use((req, res, next) => {
        res.status(404).send('Page is not found');
      });
      
      app.use((err, req, res, next) => {
        res.status(500).send(err);
      });

    app.listen(3000,()=>{
        console.log("Server is listening at port 3000")
    })