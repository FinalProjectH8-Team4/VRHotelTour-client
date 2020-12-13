import axios from '../../../config/axiosInstance'

export const FetchAllHotels = () => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: '/'
        })
        .then(({data}) => {
            dispatch({
                type: 'SET_ALL_HOTELS',
                payload: data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}