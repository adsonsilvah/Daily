import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
        container:{
              flex: 1, 
              backgroundColor: '#152349',
              fontStyle : 'normal',
              
        },
        texto:{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 20,
            alignItems: 'flex-end', 
            justifyContent: 'flex-end',
            alignSelf: 'flex-start',
            paddingHorizontal:10,
        },
        textoButaoSalva:{
          alignContent: 'flex-end',
          alignItems: 'flex-end',
          alignSelf: 'flex-end',
          color: '#fff',
          fontSize: 25
        },
        textoButaoCancela:{
          alignContent: 'flex-start',
          alignItems: 'flex-start',
          alignSelf: 'flex-start',
          color: '#fff',
          fontSize: 25
        },
  
        input: {
          alignSelf: 'stretch',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 4,
          paddingHorizontal: 20,
          marginTop: 10,
          fontSize: 20,
          marginHorizontal:10,
          
        },
        titleInput: {
          height: 46,
        },
  
        ButaoSalva:{
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'flex-end',
          alignSelf: 'flex-start',
          position: 'absolute',
          paddingHorizontal: 25,
          bottom: 15,
              },
  
              ButaoCancela:{
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'flex-end',
                alignSelf: 'flex-end',
                position: 'absolute',
                paddingHorizontal: 25,
                bottom: 15,
              }
});

export default styles;