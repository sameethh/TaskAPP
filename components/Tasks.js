import { View, Text, FlatList, StyleSheet, StatusBar, Button, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'

const Tasks = (props) => {
   const {DATA} =  props

   const renderItem = ({ item }) => {
    return(
    <Item title={item.title} id={item.id}/>
  )}

   const Item = ({ title, id }) => (
    <View style={styles.item}>
      <View style={{flex:0.9,justifyContent:'flex-start'}}>
        <Text style={styles.title}>{title.length > 38 ? title.substring(0,38).concat('...'):title}</Text>
      </View>
      <View style={{flex:0.1, alignItems:'flex-end', justifyContent:'center'}}>
      <TouchableHighlight onPress={() => props.removeTask(id)} style={{justifyContent:'center',}}>
         <Text style={{color:'white'}}>clear</Text>
      </TouchableHighlight>
      </View>
    </View>
  )
  
   return (
    <View style={{marginTop:10,borderTopWidth:2,borderRadius:2}}>
        <FlatList
            style={{marginTop:5}}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </View>
    )}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
        },
        item: {
         // justifyContent:'flex-end',
          flex:1,
          flexDirection:'row',
          backgroundColor: '#616A6B',
          padding: 10,
          marginVertical: 1,
          marginHorizontal: 10,
        },
        title: {
          fontSize: 20,
        },
      });

      

export default Tasks