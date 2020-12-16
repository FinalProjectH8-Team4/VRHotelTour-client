import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, ScrollView, Dimensions, Image, View } from 'react-native';
import { fetchHotelById } from '../store/actions/actionHotels'
import ImageComponent from '../components/imageComponent'
import { Carousel } from 'nachos-ui'

const widthValue = Dimensions.get('window').width

export default function Booking() {
  const dispatch = useDispatch()
  const [images, setImages] = useState([])
  const hotel = useSelector((state) => state.hotel)

  useEffect(() => {
    dispatch(fetchHotelById('5fd79a441f23dcdb038a18ff'))
  }, [])

  useEffect(() => {
    if (hotel.facilities) {
      const pushImages = hotel.facilities.map(facility => {
        return {
          uri: facility.images[0],
          desc: facility.name
        }
      })

      setImages(pushImages)
    }
  }, [hotel])


  return (
    <ScrollView>
      <Carousel>
        {images.map((image, index) => (
          <ImageComponent key={index} uri={image.uri} desc={image.desc} />
        ))}
      </Carousel>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullwidth: {
    width: widthValue - 10,
    height: widthValue - 10
  }
});