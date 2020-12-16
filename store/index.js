import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  hotel: {},
  isBookingSuccess: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_HOTEL_BY_ID':
      return { ...state, hotel: action.payload }      
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store