
var express = require("express")

var path = require("path")
const cookieParser = require("cookie-parser")

var logger = require("morgan")

var app = express()

// app.use((req,res,next)=>{
// console.log(req.method,req.url)
// next()
// })

app.use(logger("dev"))


app.use((req,res,next)=>{
res.cookie("name","Arti")
next()
})

app.use(express.json())

// app.use(express.urlencoded({extend:false}))

app.get('/',(req,res) => {
    console.log(__dirname)
    res.sendFile(__dirname + "/index.html")
        })
      

    app.get("/new" ,(req,res)=>{
        console.log('hello')
        res.sendFile(__dirname + '/new.html')
        })
      

app.use(express.static(__dirname + "/public"))


            
app.post("/new",(req,res)=>{
   console.log(req.body)
})



app.listen(4000,()=>{
    console.log("server is listening at port 4000")
})