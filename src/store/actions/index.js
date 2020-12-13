// import axios from '../../../config/axiosInstance'
const baseURL = 'http://localhost:3000'

export const FetchAllHotels = () => {
    console.log('uphere')
    return (dispatch) => {
        fetch(baseURL+'/')
        .then(response => response.json())
        .then(data => {
            dispatch({type: 'SET_ALL_HOTELS', payload: data})
        })
        .catch(err => {
            console.log(err)
        })
    }
}