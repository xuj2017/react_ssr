import {createStore,applyMiddleware,combineReducers} from 'redux';

import thunk from 'redux-thunk';
import {reducer as HomeReducer}  from '../containers/Home/store';


const reducer = combineReducers({
    home:HomeReducer
})

export const getStore = ()=>{
    return createStore(reducer,applyMiddleware(thunk));
}

//客户端的store创建函数
export const getClientStore = () => {
    const defaultState = window.context ? window.context.state : {};
    return createStore(reducer, defaultState, applyMiddleware(thunk));
}