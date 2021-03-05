import React, { useState, useEffect } from 'react'
import {
  View,
  SafeAreaView,Button
} from 'react-native'

import Header from './components/Header'
import TaskInput from './components/TaskInput'
import Tasks from './components/Tasks'
import Footer from './components/Footer'



const TaskExplorer = () => {

  useEffect(() => {
  },[tasks])

  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState()
  const [visible, Visibility] = useState(false)
  const [order, setOrder] = useState('')
 

  const AddTask = (event) => {
    Visibility(false)
    if (event) {
      const { text } = event.nativeEvent
      text ? setTasks((tasks) => [...tasks, {
        id: Math.random().toString(),
        title: text
      }]) : console.warn('Add task error')
    } else if (input) {
      setInput('')
      setTasks((tasks) => [...tasks, {
        id: Math.random().toString(),
        title: input
      }])
    }
  }
  
  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter(task => id != task.id))
  }

  const InputChange = (text) => {
    setInput(text)
  }

  const sorting = () => { 
   order === '' || order === 'Desc' ?  setOrder('Asc') : setOrder('Desc')
    setTasks((tasks) => [...tasks].sort((a,b) => {
       a = a.title.toLowerCase() , b = b.title.toLowerCase()
       return  order === 'Asc' ? (a < b ? -1 : a > b ? 1 : 0 ) : (a > b ? -1 : a < b ? 1 : 0 ) 
    }))
  }

  return ( 
    <SafeAreaView style={{flex:1,backgroundColor:'teal'}}>
        <Header customHeader={'Task App'}/>
          <View style={{flex:1,backgroundColor:'white'}}>
            <TaskInput 
              visible={visible}
              AddTask={AddTask}
              InputChange={InputChange}
              Visibility={(flag) => Visibility(flag)}
              />
              <View style={{ borderWidth: 1,
                    margin:5,
                    marginHorizontal:160,
                    borderColor: 'black',
                    backgroundColor: 'black'}}>
                    <Button  title={'START'}  color="white" onPress={() => Visibility(true)}/>
              </View>
             {tasks.length > 1 ? <View style={{ borderWidth: 1,
                    marginHorizontal:160,
                    borderColor: 'black',
                    backgroundColor: 'black'}}>
                    <Button  title={order === 'Asc' ? 'SORT^' : order === 'Desc'? 'SORTv' : 'SORT' }  color="white" onPress={sorting}/>
              </View> : null }
              <View style={{flex:0.88}}>
                <Tasks 
                  DATA={tasks}
                  removeTask={removeTask}
                  />
                </View>
          </View>
        <Footer count={tasks.length}/>
    </SafeAreaView>
)}

export default TaskExplorer