const redux=reqire('redux')

const counterReducer=(state={counter:0} , action)=>{
    return {
        counter:state.counter+1
    }
}
const store = redux.createStore(counterReducer)

const counterSubscribe=()=>{
   const latestState= store.getState()
}
store.subscribe(counterSubscribe)
store.dispatch({type:'increment'})