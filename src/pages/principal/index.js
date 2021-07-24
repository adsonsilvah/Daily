import {Texto,Subtexto } from './styles';
import { Container } from '../../themes/styles';
import MyComponent from './FormCadastro/CadastroModal';
import * as React from 'react';


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

