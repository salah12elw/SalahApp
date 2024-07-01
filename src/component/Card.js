import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = (props) => {
  
  return (<View style={styles.IED}>
    <View style={styles.card}>
      <View style={styles.FIB}></View>
      <View style={styles.FI}>
        <Text style={styles.name} >name:{props.name}</Text>
        <Text style={styles.name} >B.D:{props.BD}</Text>



      </View>

    </View>
    <Text style={styles.ID}>my first ui</Text>
    
  </View>
)
    
}

export default Card

const styles = StyleSheet.create({
   
    txt: {
        color: "white",
        fontSize: 20,
        fontWeight: "800",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 250,
    },
    IED: {
        height: 270,
        width: '95%',
        //backgroundColor: "red",
        borderWidth: 1,
        fontSize:50,
        margin:10
        
    },
    ID: {
        height: '50%',
        width: '90%',
        //backgroundColor: "red",
        
        fontSize:35,
        marginTop:20,
        margin:100
        
    },
    card: {
        height: '70%',
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        marginLeft:20,
    },
    FIB: {
        height: '100%',
        width: '40%',
        borderWidth: 1,
        backgroundColor: "blue",
    },
    FI: {
        height: '100%',
        width: '50%',
        borderWidth: 1,
        padding:25,
    },
    name: {
        fontSize:25,
        
    }
    
})