import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Screen2 = (props) => {
    const info = props.route.params
    // console.log(info);
    return (
        <View>
            <Text style={styles.info}>{info.name}</Text>
            <Text style={styles.info}>{info.color}</Text>
            <Text style={styles.info}>{info.price}</Text>
            <Text style={styles.info}>{info.age}</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>
                    buy
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    name: {

    },
    textButton:{
        fontSize:50,
        color:"blue",
    },
    button:{
        alignSelf:'center',


    },
    info:{
        fontSize:20,
        color:"red"
    }
})

export default Screen2;
