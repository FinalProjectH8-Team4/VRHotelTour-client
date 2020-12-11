import { createStore, applyMiddleware } from 'redux'
import thunk from 'react-redux'

function reducer (state, actions) {
    return state
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store