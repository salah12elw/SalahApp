import React from 'react';
import { StyleSheet,ScrollView,TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { data } from '../data/data';

const Screen1 = () => {
    const goto=useNavigation()

    const render=()=> {
      return (
        data.map((mosa)=>
        <TouchableOpacity 
        onPress={()=>{goto.navigate("Screen2",{...mosa})}}
        key={mosa.name} style={[styles.mosa,{backgroundColor:mosa.color}]}>
           <Text>{mosa.name}</Text>
            <Text>{mosa.price}</Text>
            <Text>{mosa.age}</Text>
        </TouchableOpacity>
        )
      )
    };

    return (
        <ScrollView>
            {render()}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mosa:{
        height:235,
        width:"100%",
        borderWidth:5,
 fontsize:100
    
    }
})

export default Screen1;
