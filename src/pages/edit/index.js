import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebaseconfig";
import styles from "./styles";

export default function EditHabito({navigation, route}){

    const [descriptionEdit, setDescriptionEdit] 
    = useState(route.params.description)
    const idHabito = route.params.id

    function editHabito(description, id){
        database.collection("Habitos").doc(id).update({
            description: descriptionEdit,
        })
        navigation.navigate("Principal")
    }
    return(
        <View style = {styles.container}>
        <Text style = {[styles.texto, styles.titleInput]}>Nome:</Text>

        <TextInput
            placeholder="Nome do Hábito"
            placeholderTextColor="#999" 
            onChangeText = {setDescriptionEdit}
            value = {descriptionEdit}
            style = {styles.input}
            />


        <TouchableOpacity style = {styles.ButaoSalva} onPress = {() => {
            editHabito(descriptionEdit, idHabito)
        }}>

             <Text style = {styles.textoButaoSalva}>Salvar</Text>

        </TouchableOpacity>

        <TouchableOpacity style = {styles.ButaoCancela} onPress = {() => navigation.navigate("Principal")}>

            <Text style = {styles.textoButaoCancela}>Cancelar</Text>

        </TouchableOpacity>


        </View>
    );
}