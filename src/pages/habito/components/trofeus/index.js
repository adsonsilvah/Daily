import React from 'react';
import { TouchableOpacity, Text, ScrollView} from 'react-native';
import { Container } from '../../../../themes/styles';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

export default function Trofeus() {
    return (
      <>
      <Container>
        <ScrollView>
              <TouchableOpacity
              style = {styles.Conquistas}
              >
                <Text>10 Dias de Hábito</Text>
              </TouchableOpacity>
   
              <TouchableOpacity
              style = {styles.Conquistas}
              >
                <Text>15 Dias de Hábito</Text>
              </TouchableOpacity>
   
              <TouchableOpacity
              style = {styles.Conquistas}
              >
                <Text>30 Dias de Hábito</Text>
              </TouchableOpacity>
   
              <TouchableOpacity
              style = {styles.Conquistas}
              >
                <Text>60 Dias de Hábito</Text>
                
              </TouchableOpacity>
   
              <TouchableOpacity
              style = {styles.Conquistas}
              >
                <Text>100 Dias de Hábito</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
              style = {styles.Conquistas}
              >
                <Text>1 ano de Hábito</Text>
              </TouchableOpacity>

        </ScrollView>            
      </Container>
      </>
             );
  }