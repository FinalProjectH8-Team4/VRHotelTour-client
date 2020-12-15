import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { StyleSheet, Text, ScrollView, Dimensions, Image, View } from 'react-native';
import {fetchHotelById} from '../store/actions/actionHotels'
import ImageComponent from '../components/imageComponent'
import {Carousel} from 'nachos-ui'

const widthValue = Dimensions.get('window').width

export default function Booking(){
    const dispatch = useDispatch()
    const [images, setImages] = useState([])
    const hotel = useSelector((state) => state.hotel)

    useEffect(()=>{
        dispatch(fetchHotelById('5fd83f9209fe494d61c1a7f2'))
    },[])

    useEffect(()=>{
        if(hotel.facilities){
            const pushImages = hotel.facilities.map(facility => {
                return {
                    uri : facility.images[0],
                    name : facility.name,
                    desc : facility.description
                }
            })
            setImages(pushImages)
        }
    },[hotel])


    return (
        <View style={styles.container}>
            <Text style={{fontStyle: 'italic', fontSize: 30, color: '#4d3572', textAlign: 'left', marginBottom: 10, marginTop: 100}}>Inep<Text style={{fontWeight: 'bold'}}>Inn</Text></Text>
            <View>
                <ScrollView>
                    <Carousel>
                    {images.map((image, index)=>(
                        <ImageComponent key={index} uri={image.uri} name={image.name} desc={image.desc}/>
                    ))}
                    </Carousel>
                </ScrollView>
                <Text style={{marginBottom: 150, textAlign: 'justify', padding: 30}}>
                Enjoy an exceptional stay in the Jakarta city center. In addition to room and suite accommodation, 
                fully equipped to meet the needs of the modern corporate and leisure traveler. Featuring a swimming pool, 
                Fitness and Spa, private Executive Lounge, Bar, Cafe, and Restaurant.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
});