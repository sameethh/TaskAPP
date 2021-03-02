import React from 'react'
import { View, Text} from 'react-native'


const Footer = ({count}) => {
    return(
        <View style={{flex:0.05,margin:5,alignItems:'center',justifyContent:'center'}}>
            <Text>
                Total number of tasks added are {count}
            </Text>
        </View>
     )}

export default Footer