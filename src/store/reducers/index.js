const initialState = {
    hotels: [],
    hotel: {}
}

export default function ReducerFetchAllHotels (state = initialState, action) {
    switch (action.type) {
        case 'SET_ALL_HOTELS': 
            return {...state, hotels: action.payload}
        case 'SET_HOTEL_BY_ID':
            return {...state, hotel: action.payload}
        default: 
            return state
    }
}