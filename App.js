import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Principal, Habito, NewHabito } from './src';
import * as React from 'react';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Principal'>
        <Stack.Screen name="Principal" component={Principal} options = 
        {{title: 'Meus Hábitos',headerStyle: {backgroundColor: '#152349',
        borderBottomWidth: 2, 
        borderBottomColor: "#fff",
          }, 
          headerTintColor: '#fff', 
          headerTitleStyle: 
          {fontWeight: 'bold',
          alignContent: 'center', 
          alignItems: 'center', 
          alignSelf: 'center',
          fontSize: 25,
            
          }}} />

          <Stack.Screen
          name= "Habito"
          component={Habito}
          options = 
          {{title: '',headerStyle: {backgroundColor: '#152349',
          borderBottomWidth: 2, 
          borderBottomColor: "#fff",
            }, 
            headerTintColor: '#fff', 
            headerTitleStyle: 
            {fontWeight: 'bold',
            alignContent: 'center', 
            alignItems: 'center', 
            alignSelf: 'flex-start',
            fontSize: 25,
            
          }}}
          
          />

          <Stack.Screen 
          name = "NewHabito"
          component = {NewHabito}
          options = 
          {{title: 'cadastre seu hábito aqui',headerStyle: {backgroundColor: '#152349',
          borderBottomWidth: 2, 
          borderBottomColor: "#fff",
            }, 
            headerTintColor: '#fff', 
            headerTitleStyle: 
            {fontWeight: 'bold',
            alignContent: 'center', 
            alignItems: 'center', 
            alignSelf: 'center',
            fontSize: 25,
            
          }}}
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
