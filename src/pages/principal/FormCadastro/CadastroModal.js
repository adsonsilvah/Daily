import * as React from 'react';
import { Portal, Provider } from 'react-native-paper';
import { Modal, TouchableOpacity } from 'react-native';
import { Botao } from '../styles';
import {AntDesign} from '@expo/vector-icons';
import { Container } from '../../../themes/styles';
import { TextoBotao } from './StylesModal';

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
           
            <TouchableOpacity onPress= {hideModal}>

                <TextoBotao>Cancela</TextoBotao>

            </TouchableOpacity>

            <Container/>

        </Modal>

      </Portal>

      <Botao onPress={showModal}>

         <AntDesign name= 'pluscircle' size = {50} color= {'#fff'}/>

        </Botao>

    </Provider>

    </>
  );
};

export default MyComponent;