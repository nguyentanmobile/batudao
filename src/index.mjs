import cookieParser from "cookie-parser"
import express from "express"
import session from "express-session"
import dotenv from "dotenv"

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(session({
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:60000*60 //1 minute qui dinh thoi gian cho 1 session
    }
}));

const PORT = process.env.PORT || 3000
console.log(PORT)
app.listen(PORT,(err)=>{
    if(err){
        console.log("Server have problem");
    }else{
        console.log("Server is starting");
    }
})