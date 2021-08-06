import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebaseconfig";
import styles from "./style";

export default function NewHabito({navigation}){

    const [description, setDescription]  = useState(null)

    function addHabito(){
        database.collection("Habitos").add({
            description: description,
            status : false
        })
        navigation.navigate("Principal")
    }

    return(
        <>
        <View style = {styles.container}>
        <Text style = {[styles.texto, styles.titleInput]}>Nome:</Text>

        <TextInput
            placeholder="Nome do Hábito"
            placeholderTextColor="#999" 
            onChangeText = {setDescription}
            value = {description}
            style = {styles.input}
            />

            <Text style = {[styles.texto, styles.titleInput]}>Pergunta:</Text>

        <TextInput
            placeholder="Ex: Você meditou hoje?"
            placeholderTextColor="#999" 
            style = {styles.input}
            />

            <Text style = {[styles.texto, styles.titleInput]}>Notificação:</Text>

            <Text style = {[styles.texto, styles.titleInput]}>Digite abaixo sua motivação:</Text>

        <TextInput 
            placeholder="Motivação " 
            placeholderTextColor="#999" 
            multiline={true} 
            numberOfLines={5} 
            style = {styles.input}
            />

        <TouchableOpacity style = {styles.ButaoSalva} onPress = {() => {
            addHabito()
        }}>

             <Text style = {styles.textoButaoSalva}>Salvar</Text>

        </TouchableOpacity>

        <TouchableOpacity style = {styles.ButaoCancela} onPress = {() => navigation.navigate("Principal")}>

            <Text style = {styles.textoButaoCancela}>Cancelar</Text>

        </TouchableOpacity>


        </View>
        </>
    );
}