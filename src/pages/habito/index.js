import React from 'react';
import { Container } from '../../themes/styles';
import {Calendario, Configura, Grafico, Trofeus} from './components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();



export default function Habito(){
    return(
        <Container>  
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
      
            switch (route.name) {
              case 'Calendario':
                iconName = 'calendar';
                break;
              case 'Grafico':
                iconName = 'bar-chart';
                break;
              case 'Trofeus':
                iconName = 'trophy';
                break;
              case 'Configurações':
                iconName = 'cog';
                break;
            }
      
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
          tabBarOptions={{
          activeTintColor: '#9C27B0',
          inactiveTintColor: '#777',
        }}
        >
            <Tab.Screen name="Calendario" component={Calendario} />
            <Tab.Screen name="Grafico" component={Grafico} />
            <Tab.Screen name="Trofeus" component={Trofeus} />
            <Tab.Screen name="Configurações" component={Configura} />
        </Tab.Navigator>
        </Container>
    );
}