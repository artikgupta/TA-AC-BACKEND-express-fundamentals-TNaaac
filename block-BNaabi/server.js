var express = require("express")

var app = express()

var logger = require("morgan")

var cookieParser = require("cookie-parser")

// app.use((req,res,next)=>{
// console.log(req.method,req.url)
// next()
// })

app.use(logger('dev'))

app.use(cookieParser())

app.use((req,res,next)=>{
    res.cookie("name","Arti")
    next()
})

app.use(express.json())

app.use(express.urlencoded({extend:false}))

app.use(express.static(__dirname + "/public"))


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
    })

 app.get("/contact", (req,res)=>{
res.send("welcome")
})
            
app.post("/json",(req,res)=>{
    console.log(req.body)
})


app.listen(3000,()=>{
    console.log("server is listening at port 3000")
})