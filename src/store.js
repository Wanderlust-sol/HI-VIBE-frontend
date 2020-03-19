import {createStore} from 'redux';

export default createStore(function(state, action){
    if( state=== undefined){
        return{state:state.songBox}
    }
    if(action.type === 'ADD_MUSIC'){
        return{state: state.songBox + action.state}
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())