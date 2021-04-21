var express = require("express")

var app = express()

var logger = require('morgan');
var cookieParser = require('cookie-parser');

app.use(logger('dev'));

app.use(cookieParser());

app.use('/admin', (req, res, next) => {
  next('uncaught error');
});


app.use((req,res,next)=>{
console.log(req.method,req.url)
next()
})

app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use(express.static(__dirname + "/public"))


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
    })

 app.get("/about", (req,res)=>{
 res.sendFile(__dirname + "/about.html")
})
app.get("/blog", (req,res)=>{
    res.sendFile(__dirname + "/blog.html")
})
   
    app.get("/cases", (req,res)=>{
        res.sendFile(__dirname + "/cases.html")
    })
   
        app.get("/contact", (req,res)=>{
            res.sendFile(__dirname + "/contact.html")
    })
            app.get("/services", (req,res)=>{
                res.sendFile(__dirname + "/services.html")
            })
                   

            app.use((err, req, res, next) => {
                res.send(`<h2> ${err} </h2>`);
              });
            

app.post("/json",(req,res)=>{
    console.log(req.body)
})


app.listen(3000,()=>{
    console.log("server is listening at port 3000")
})