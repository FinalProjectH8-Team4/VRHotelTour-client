import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { FetchAllHotels } from '../store/actions/index'

function HotelFacility () {
    const dispatch = useDispatch()
    const hotels = useSelector((state) => state.hotels)

    useEffect(() => {
        dispatch(FetchAllHotels())
    }, [])

    useEffect(() => {
        if(hotels) {
            console.log(hotels)
        }
    }, [hotels])

    return (
        <View>
             <Text>{JSON.stringify(hotels)}</Text>
        </View>
    )
}

export default HotelFacility