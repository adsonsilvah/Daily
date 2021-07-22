import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Principal } from './src';
import * as React from 'react';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
