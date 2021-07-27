import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Principal, Habito } from './src';
import * as React from 'react';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Principal'>
        <Stack.Screen name="Principal" component={Principal} options = 
        {{title: 'Seus Hábitos',headerStyle: {backgroundColor: '#152349',
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
          {{title: 'Estudar',headerStyle: {backgroundColor: '#152349',
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
