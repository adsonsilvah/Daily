import React, {useState} from 'react';
import { Portal, Provider } from 'react-native-paper';
import { Modal, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Botao } from '../styles';
import {AntDesign} from '@expo/vector-icons';
import { TextoBotao, Container } from './StylesModal';



const MyComponent = () => {
    
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
 
  return (
      <>
  
      <Provider>
        <Portal>
       
            <Modal  visible={visible} 
                onDismiss={hideModal} 
                animationType= {'slide'}>


            <Container>

            <Text style={styles.texto}>Nome:</Text>

              <TextInput
                style={[styles.input, styles.titleInput]}
                placeholder="Nome do Hábito"
                placeholderTextColor="#999"
               />

              <Text style={styles.texto}>Pergunta:</Text>

              <TextInput
                style={[styles.input, styles.titleInput]}
                placeholder="Ex: Você meditou hoje?"
                placeholderTextColor="#999" />

                <Text style={styles.texto}>Notificação:</Text>

              <Text style={styles.texto}>Digite abaixo sua motivação:</Text>

              <TextInput style={styles.input} 

              placeholder="Motivação " 
              placeholderTextColor="#999" 
              multiline={true} 
              numberOfLines={5} 

              />
                <TouchableOpacity onPress= {hideModal} style = {styles.ButaoCancela}>

                <TextoBotao>Cancelar</TextoBotao>

              </TouchableOpacity>

              <TouchableOpacity onPress= {hideModal} style = {styles.ButaoSalva}>
              <TextoBotao>Salvar</TextoBotao>
              </TouchableOpacity>

              </Container>
            </Modal>
            
        </Portal>
              <Botao onPress={showModal}>

                  <AntDesign name= 'pluscircle' size = {50} color= {'#fff'}/>

              </Botao>
      </Provider>
  
    </>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: '#FFF',
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

export default MyComponent;