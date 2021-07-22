import * as React from 'react';
import {Texto,Subtexto,Botao } from './styles';
import { Container } from '../../themes/styles';
import {AntDesign} from '@expo/vector-icons';

export default function Principal() {
    
    return (
    <>
    
    <Container>

         <Texto>
             Você ainda não possui nenhum hábito
         </Texto>

         <Subtexto>  
             Adicione aqui seu primeiro hábito
         </Subtexto>

    </Container>

     

    <Container>

     <Botao>
         <AntDesign name= 'pluscircle' size = {50} color= {'#fff'}/>
     </Botao>

   </Container> 

   </>
   );
 
}
