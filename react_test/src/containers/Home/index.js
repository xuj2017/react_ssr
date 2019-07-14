// import React from 'react';
// import Header from '../../components/Header';
// import {connect} from 'react-redux';

// const Home = (props)=>{
//     let {name} = props
//     return (
//         <div>
//             <Header/>
//             <div>Home {name}</div>
//             <button onClick={()=>{alert("home")}}>click</button>
//         </div>
//     )
// }

// const mapStateToProps =(state)=>({
//     name:state.name
// })

// export default connect(mapStateToProps,null)(Home)

import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';

const Home = (props)=>{
    let {name} = props;
    return (
        <div>
            <Header/>
            <div>Home {name}</div>
        </div>
    )
}

const mapStateToProps = (state)=>({
    name:state.name
})

export default connect(mapStateToProps,null)(Home);
// export default Home