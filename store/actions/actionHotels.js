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
        // dispatch({
        //     type: 'SET_HOTEL',
        //     payload : {
        //         "Hotel":{
        //           "_id": "",
        //           "name": "Hotel Melati",
        //           "room_type": [
        //             {          
        //               "type" : "Junior Suite",
        //               "price": 2000,
        //               "facilities": {
        //                 "tv": {
        //                   "size" : "20Inch",
        //                   "channels" : [
        //                     "HBO", "Animax" , "History"
        //                   ],
        //                   "type" : "smart tv or dumb tv"
        //                 },
        //                 "fridge" : [
        //                   "Mineral Watah", "Coke", "Kiranti"
        //                 ],
        //                 "bed" : "Queen",
        //                 "intercom" : {
        //                   "001" : "Receptionist",
        //                   "002" : "Laundry",
        //                   "003" : "Restaourant",
        //                   "004" : "Room Service"              
        //                 },
        //                 "essentials" : [
        //                   {
        //                     "name" : "Amenitites",
        //                     "icon" : "http://something.com/iconamenities.svg"
        //                   },
        //                   {
        //                     "name" : "Slippers",
        //                     "icon" : "http://something.com/slippers.svg"
        //                   },
        //                   {
        //                     "name" : "SafeBox",
        //                     "icon" : "http://something.com/safebox.svg"
        //                   }
        //                 ]
        //               },
        //               "room_image": "http://something.com/360.jpg"
        //             }
        //           ],
                //   "facilities": [
                //     {
                //         "images": [
                //             "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjonisweet%2Ffiles%2F2019%2F03%2FBest-hotel-gyms-Aria-Technogym.jpg",
                //             "https://i.pinimg.com/originals/4c/d7/c5/4cd7c56d8b6ee11d9f1749d7f3f789e6.jpg",
                //             "https://media-cdn.tripadvisor.com/media/photo-s/07/9f/0b/33/aria-resort-casino.jpg"
                //         ],
                //         "name": "Gym",
                //         "description": "Gym something sadjkasjd kasjdkjasd lkjsdad aksjdad kajsdlkjasd lkasjsdlkjasd"
                //     },
                //     {
                //         "images": [
                //             "https://www.ramagardenhotelbali.com/wp-content/uploads/2015/07/Spa-Room-4-resize.jpg",
                //             "https://www.oysterboxhotel.com/-/media/ttc/rch/oyster-box-hotel/spa-facilities-500x250/ob-spa-2020-014-500x250.jpg?h=250&la=en&w=500&hash=ED7B0AEC3701604F64B90377B10E81D429EABDD9",
                //             "https://www.oysterboxhotel.com/-/media/ttc/rch/oyster-box-hotel/main-carousel/mobile-1024x576/ob-spa-foot-massage-2020-1024x576.jpg?h=576&la=en&w=1024&hash=A6E8410917597ABC434642DBBA5C86F0C6C79101",
                //             "https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/Las%20Vegas/wynn-las-vegas-spa-hotels-2.jpg?imwidth=450"
                //         ],
                //         "name": "Spa",
                //         "description": "Spa something asjdkj askdj aksdja sdkajsdansd askdaskndsa dkasdnasda askdnaksndsad"
                //     }
                // ]
        //         }
        //       }
        // })
    }

}