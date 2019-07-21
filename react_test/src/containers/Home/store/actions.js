import axios from 'axios';
import {CHANGE_LIST} from './contants'


const changeList = (list)=>({
    type:CHANGE_LIST,
    list
})

export const getHomeList =()=>{
    return (dispatch)=>{
       return axios.get("http://yapi.demo.qunar.com/mock/7663/testApi/listData").then((res)=>{
            let list = res.data.data;
            dispatch(changeList(list))
        })
    }
}