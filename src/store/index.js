import {createStore} from 'redux'

const reducerFn = (state = { counter : 10},action)=>{

    if(action.type === "INC"){
        return {counter:state.counter++}
    }
    if(action.type === "DEC"){
        return {counter:state.counter--}
    }
    return state
}

const store = createStore(reducerFn)

export default store;