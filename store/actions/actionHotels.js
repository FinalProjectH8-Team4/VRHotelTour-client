import axios from 'axios'
import { EventRegister } from 'react-native-event-listeners'
const baseUrl = "http://13.212.173.127:3001"

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
  console.log(emailAddress);
  console.log('dispatched');
  return (dispatch) => {
    axios.post(`${baseUrl}/bookroom`,{
      emailAddress
    })
    .then(({data})=>{
      EventRegister.emit('booking_success', 'Thank you for reaching out to us, we will contact you soon!')
    })
    .catch(err=>{
      EventRegister.emit('booking_failed', err)
    })
  }
}