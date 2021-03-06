import {Route} from 'react-router-dom';
import React from 'react';
import Home from './containers/Home';
import Login from './containers/Login';

export default [
    {
      path: "/",
      component: Home,
      exact:true,
      key:"home",
      loadData:Home.loadData
    },
    {
    path: "/login",
    component: Login,
    exact:true,
    key:"login"
    }
  ];


// export default(
//     <div>
//         <Route path="/" exact component={Home}></Route>
//         <Route path="/login" exact component={Login}></Route>
//     </div>
// )