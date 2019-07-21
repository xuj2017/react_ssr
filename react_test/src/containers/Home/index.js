import React,{Component} from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import {getHomeList} from './store/actions';

class Home extends Component {

    getList(){
        const {list} = this.props;
        return list.map(item=><div key={item.id}>{item.id}:{item.title}</div>)
    }

    render(){
        return (
            <div>
                <Header/>
                <div>Home {this.props.name}</div>
                {this.getList()}
                <button onClick={()=>{alert("home")}}>click</button>
            </div>
        )
    }

    componentDidMount(){
        if (!this.props.list.length) {
            this.props.getHomeList()
          }
    }
}

Home.loadData = (store) => {
    return store.dispatch(getHomeList())
}

const mapStateToProps = (state)=>({
    list:state.home.newsList,
    name:state.home.name
})

const mapDispatchToProps = dispatch =>({
    getHomeList(){
        dispatch(getHomeList())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
// export default Home