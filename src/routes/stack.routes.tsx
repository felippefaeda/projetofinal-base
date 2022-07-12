import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../pages/Welcome'
import { Home } from '../pages/Home';
import { CadProduto } from '../pages/CadProduto';

const Stack = createNativeStackNavigator();

const AppRoute: React.FC = () => (
    <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >       
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: 'Boas-Vindas' }}
        />
        <Stack.Screen 
          name="CadProduto" 
          component={CadProduto} 
          options={{ title: 'Cadastro de Produtos' }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        
      </Stack.Navigator>
)

export default AppRoute;