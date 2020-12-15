import axios from 'axios'
const baseUrl = "http://192.168.100.7:3002"

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

export const bookByMail = (emailAddress) => {
  console.log('dispatched');
  return (dispatch) => {
    axios.post(`${baseUrl}/bookroom`,{
      emailAddress
    })
    .then(({data})=>{
      console.log(data)
    })
    .catch(err=>{
      console.log(err);
    })
  }
}