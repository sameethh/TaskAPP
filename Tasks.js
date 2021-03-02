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
      <View style={{flex:0.85,justifyContent:'flex-start'}}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableHighlight onPress={() => props.removeTask(id)} style={{flex:0.15,justifyContent:'center',}}>
         <Text style={{color:'white'}}>Clear</Text>
      </TouchableHighlight>
    </View>
  )
  
   return (
    <View>
        <Text></Text>
        <FlatList
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
          fontSize: 32,
        },
      });

      

export default Tasks