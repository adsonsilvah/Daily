import React from 'react';
import { Text, ScrollView, View} from 'react-native';
import { Container } from '../../../../themes/styles';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

export default function Trofeus() {
    return (
      <>
      <Container>
        <ScrollView>

          <View style = {styles.ViewTeste}>
          <Text>7 Dias de Hábito</Text>
          </View>
          <View style = {styles.ViewTeste}>
          <Text>15 Dias de Hábito</Text>
          </View>
   
          <View style = {styles.ViewTeste}>
          <Text>30 Dias de Hábito</Text>
          </View>
   
          <View style = {styles.ViewTeste}>
          <Text>60 Dias de Hábito</Text>
          </View>
   
          <View style = {styles.ViewTeste}>
          <Text>120 Dias de Hábito</Text>
          </View>
              
          <View style = {styles.ViewTeste}>
          <Text>1 ano de Hábito</Text>
          </View>

        </ScrollView>            
      </Container>
      </>
             );
  }