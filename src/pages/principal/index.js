import * as React from 'react';
import {Texto,Subtexto,Botao } from './styles';
import { Container } from '../../themes/styles';
import {AntDesign} from '@expo/vector-icons';
import MyComponent from './FormCadastro/CadastroModal';

export default function Principal() {
    
    return (
    <>
    
    <Container>

         <Texto>
             Você ainda não possui nenhum hábito
         </Texto>
         
    </Container>

    <Container>

            <Subtexto>  
             Adicione aqui seu primeiro hábito
            </Subtexto>

        <MyComponent/>

   </Container> 

   </>
   );
 
}
