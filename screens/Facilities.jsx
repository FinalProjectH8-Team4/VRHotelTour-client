import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { StyleSheet, Text, ScrollView, Dimensions, ImageBackground, View } from 'react-native';
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
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <Text style={{fontStyle: 'italic', fontSize: 30, color: '#4d3572', textAlign: 'left', marginBottom: 10, marginTop: 20, marginLeft: 10}}>Inep<Text style={{fontWeight: 'bold'}}>Inn</Text></Text>
            <View style={styles.container}>
                <View>
                    <ScrollView>
                        <Carousel>
                        {images.map((image, index)=>(
                            <ImageComponent key={index} uri={image.uri} name={image.name} desc={image.desc}/>
                        ))}
                        </Carousel>
                    </ScrollView>
                    <Text style={{color: '#4d3572', fontSize: 20, textAlign: 'left', marginLeft: 10}}>Explore Our Rooms In <Text style={{fontWeight: 'bold'}}>VR</Text></Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column'}}>
                        <ImageBackground source={require('../assets/rooms/superior.jpg')} style={styles.rooms}>
                            <Text style={styles.roomText}>Superior Room</Text>
                        </ImageBackground>
                        <ImageBackground source={require('../assets/rooms/deluxe.jpg')} style={styles.rooms}>
                            <Text style={styles.roomText}>Deluxe Room</Text>
                        </ImageBackground>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                        <ImageBackground source={require('../assets/rooms/premier.jpg')} style={styles.rooms}>
                            <Text style={styles.roomText}>Premier Room</Text>
                        </ImageBackground>
                        <ImageBackground source={require('../assets/rooms/family.jpg')} style={styles.rooms}>
                            <Text style={styles.roomText}>Family Room</Text>
                        </ImageBackground>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rooms: {
        width: widthValue/2 -20, 
        height: 100, 
        borderRadius: 10,
        margin: 10
    },
    roomText: {
        color: 'white', 
        fontWeight: 'bold', 
        alignItems: 'center', 
        textAlign: 'center',
        paddingTop: "23%",
        fontSize: 16
    }
});