import express from 'express';
import {render} from './Utils';
const app = express();


app.use(express.static('public'))
app.get("*",(req,res)=>{
    res.send(render(req)) 
})


app.listen('3004',function(){
    console.log("server start on http://localhost:3004/")
})