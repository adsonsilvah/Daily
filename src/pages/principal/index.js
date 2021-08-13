import React, {useEffect, useState} from 'react';
import database from '../../config/firebaseconfig';
import { FontAwesome } from '@expo/vector-icons';
import style from './style';
import { View,Text,TouchableOpacity,FlatList,} from "react-native";
import EditHabito from '../cadastra/edit';



export default function Principal({navigation}) {
  
    const [habito, setHabito] = useState([]);

    function deleteHabito (id){
        database.collection("Habitos").doc(id).delete();
    }
    useEffect(() => {
        database.collection("Habitos").onSnapshot((query) =>{
            const list = []

            query.forEach((doc) => {
                list.push({...doc.data(), id: doc.id})
            })
            setHabito(list)
        }
        )
    },[])
    return (
    <>
    
    <View style = {style.Container}>
          
          <FlatList
          showsVerticalScrollIndicator = {false}
          data = {habito}
          renderItem = {( { item } ) => {
              return(
        <View style = {style.Tasks}>

            <TouchableOpacity 
        style = {style.deleteTask}
        onPress= {() => {
            deleteHabito(item.id)
        }}
        >
            <FontAwesome
            name = "trash"
            size = {23}
            color = "#fff"
            >

            </FontAwesome>
            
        </TouchableOpacity>

        <TouchableOpacity 
        style = {style.deleteTask}
        >
            <FontAwesome
            name = "pencil"
            size = {23}
            color = "#fff"
            >

            </FontAwesome>
            
        </TouchableOpacity>

        

        <Text
        style = {style.DescriptionTask}
        onPress = {() => {
            navigation.navigate("Habito", {
                id: item.id,
                description: item.description,

            })
        }}
        >
            {item.description}
        </Text>
        </View>
    );
          }}
          />

        <TouchableOpacity 
        style = {style.buttonNewTask}
        onPress= {() => navigation.navigate("NewHabito")}
        >
            <Text style = {style.iconButton}>+</Text>
        </TouchableOpacity>


      </View>
 
          
   </>
   );
 
}

