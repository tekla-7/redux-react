
import { createSlice, configureStore } from '@reduxjs/toolkit'
const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload

        },
        toggleCounter(state) { state.showCounter = !state.showCounter }
    }
});
const initialAuthState = { isAuthenticared: false }
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) { state.isAuthenticared = true },
        logout(state) { state.isAuthenticared = false }
    }
})


const store = configureStore({
    reducer: { 
        counter: counterSlice.reducer, 
        auth: authSlice.reducer
    }
})
export const counterActions = counterSlice.actions
export const authActions=authSlice.actions
export default store;