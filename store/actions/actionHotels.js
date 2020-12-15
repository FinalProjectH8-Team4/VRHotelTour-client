import axios from 'axios'
const baseUrl = "http://192.168.1.15:3001"
export const fetchHotelById = (id) => {
    return (dispatch) => {
      axios.get(`${baseUrl}/${id}`)
      .then(({data})=>{
        dispatch({
          type: 'SET_HOTEL_BY_ID',
          payload: data
        })
      })
      .catch(err=>{
        console.log(err);
      })
    }
}