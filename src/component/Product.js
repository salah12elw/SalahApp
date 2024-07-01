import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Product = (props) => {
    console.log(props.image?.()||null);

    return (
        <View style={styles.card}>
            
            <View style={styles.desc}>
                <Text>{props.name}</Text>

            </View>

            <View style={styles.imgc}>
                <Image style={styles.img} source={props.image?.()||null} />
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 250,
        alignSelf: 'center',
        margin: 10,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 10,
        flexDirection: 'row'
    },

    imgc: {
        width: '50%',
        height: 200,
        backgroundColor: "grey",
        borderRadius: 50,
        alignSelf: 'center',
        resizeMode:'center'

    },
    img: {
        width: '100%',
        height: "100%",
        borderRadius: 50,
        alignSelf: 'center',
        // resizeMode:'center'

    },
    desc:{
        width: '50%',
        height: '100%',
        borderWidth: 1
    }


})


export const data = [
    {
        name:"mosa eat cosa",
        color:"green",
        price:"1500€",
        age:200
    },
    {
        name:"mosa eat btngan",
        color:"white",
        price:"2000$", 
        age:201 
    },
    {
        name:"mosa eat kosa",
        color:"red",
        price:"3000$",
        age:202
    },
]


