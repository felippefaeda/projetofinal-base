import * as React from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';

import { Button } from '../components/Button';

type ParamList = {
  Welcome: {
    nome: string;
  };
};

export function Home(){
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'Welcome'>>();

  return(
    <View style={styles.container}>  
      <StatusBar
        backgroundColor="#E3E3E3"
      />   

      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>
          Home
        </Text>
        
        <TouchableOpacity
          onPress={() => 
            navigation.goBack()
          }
        >
          <Icon
            name="arrow-left"
            size={28}
            color="#483D8B"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.mensagem}>
        <Text style={styles.text}>
          Seja Bem-Vindo, {route.params.nome}
        </Text>
      </View>

      <View style={styles.opcoes}>
        <Button 
          title="Cadastrar Produto"
          onPress={() =>
            navigation.navigate("CadProduto" as never)
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#483D8B",
    //marginTop: StatusBar.currentHeight
  },
  mensagem: {
    flex: 2,
    justifyContent: 'center'
  },
  opcoes: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    margin: 20,
    fontSize: 20,
    color: "#FFF"
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#C0C0C0'
  },
  titulo: {
    fontSize: 24,
    color: "#483D8B",
    fontWeight: "400"
  }
});