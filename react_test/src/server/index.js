import express from 'express';
import Home from '../containers/Home';
import React from 'react'
import {renderToString} from 'react-dom/server';
const app = express();

const content = renderToString(<Home/>)
app.use(express.static('public'))
app.get("/",(req,res)=>{
    res.send(`
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8"/>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
         <title>Document</title>
     </head>
     <body>
        <div id="app">${content}</div>
     </body>
     <script src="./index.js"></script>
     </html>
    `)
})


app.listen('3004',function(){
    console.log("server start on http://localhost:3004/")
})