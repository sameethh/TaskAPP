import React from 'react'
import { View, Text, Modal, TextInput, Button, StyleSheet} from 'react-native'


const TaskInput = (props) => {

    const AddTask = () => {
        props.Visibility(false)
        props.AddTask()
         
    }

    return (
            <Modal
              visible={props.visible}
              animationType="slide"
              transparent={true}
            >
              <View style={styles.modalView}>
                <View style={styles.centeredView}>
                    <View style={styles.modalTextInputView}>  
                        <TextInput
                         placeholder={'Please add some Tasks....'}
                         onSubmitEditing={props.AddTask}
                         onChangeText={(text) => props.InputChange(text)}
                        />
                    </View>
                    <View style={{ borderWidth: 1,
                    borderColor: 'black',
                    backgroundColor: 'black'}}>
                    <Button  title={'[+]'}  color="white" onPress={AddTask}/>
              </View>
                </View>
              </View>
            </Modal>
    


    )}

export default TaskInput

const styles = StyleSheet.create({

    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centeredView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        width: 300,
        height: 300,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
                justifyContent: 'center'
            },
            modalTextInputView: {
                    width: 200,
                    borderWidth: 2,
                    margin: 20,
                    marginHorizontal: 80,
                    padding: 10,
                    borderColor: 'grey'
                },
                buttonView: {
                    borderWidth: 1,
                    borderColor: 'black',
                    backgroundColor: 'black'
                }

})