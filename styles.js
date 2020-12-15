import { StyleSheet } from "react-native"

export const Styles = StyleSheet.create({
  title:{
    fontSize: 28,
    fontWeight: "bold"
  },
  subtitle:{
    fontSize: 18
  },
  titleContainer:{
    marginLeft:20,
    marginTop: 30,
    marginBottom:40
  },
  roomCard:{    
    justifyContent:'center',
    alignItems: "center",
    position:'relative'
  },
  imageContainer:{
    borderRadius:10,
    zIndex:0,
    elevation:5,
  },
  roomCardImage:{
    height:200,
    borderRadius:10,
    zIndex:0,
  },
  cardDetail:{    
    width:'60%',    
    position:'absolute',    
    backgroundColor:'#fff',
    top:180,
    height:50,
    zIndex:2,
    elevation:5,
    borderRadius:10,
    padding:10,
    justifyContent:'center'
  }
})