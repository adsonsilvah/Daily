import {Texto,Subtexto, Bottom, TextoBotao } from './styles';
import { Container } from '../../themes/styles';
import MyComponent from './FormCadastro/CadastroModal';
import * as React from 'react';



export default function Principal({navigation}) {
    const Habito = () => {

        navigation.navigate("Habito");
    }
    return (
    <>
    
        
        <Container>
        <Bottom onPress = {() => Habito()}>
            <TextoBotao>Estudar</TextoBotao>
        </Bottom>
        <Bottom >
            <TextoBotao>Correr</TextoBotao>
        </Bottom>
        <Bottom >
            <TextoBotao>Ler</TextoBotao>
        </Bottom>
        

       <MyComponent/>

   

  </Container> 
 

   </>
   );
 
}

