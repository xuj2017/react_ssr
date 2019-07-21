import express from 'express';
import {render} from './Utils';
import { matchRoutes } from 'react-router-config'
import routes from '../Routes';
import {getStore} from '../store';
const app = express();


app.use(express.static('public'))
app.get("*",(req,res)=>{

    const store = getStore();
    const matchedRoutes = matchRoutes(routes, req.path)
  //promise对象数组
  const promises = [];

  matchedRoutes.forEach(item => {
    //如果这个路由对应的组件有loadData方法
    if (item.route.loadData) {
      //那么就执行一次,并将store传进去
      //注意loadData函数调用后需要返回Promise对象
      promises.push(item.route.loadData(store))
    }
  })

    console.log(promises)

    Promise.all(promises).then(()=>{
        res.send(render(store,routes,req))
    })
})


app.listen('3004',function(){
    console.log("server start on http://localhost:3004/")
})