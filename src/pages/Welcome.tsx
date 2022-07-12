import * as React from 'react';
import { useState } from 'react';
import { StatusBar, View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../components/Button';

export function Welcome(){
  const [nomeUsuario, setNomeUsuario] = useState("");

  const navigation = useNavigation();

  function handleHome(){
    if(nomeUsuario == ""){
      alert("Informe o nome do usário");
    } else {
      navigation.navigate("Home" as never, { nome: nomeUsuario } as never);
    }
  }

  return(
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#E3E3E3"
      />
      <Text style={styles.titulo}>
        App Name
      </Text>
      <Image 
        style={styles.image}
        source={require('../assets/LogoApp.png')}
        resizeMode='contain'
      />
      <Text style={styles.descricao}>
        Este aplicativo demonstra o funcionamento da navegação entre telas.
      </Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite o seu nome"        
        keyboardType="default"
        onChangeText={(valor) => setNomeUsuario(valor)}
      />

      <Button 
        title="Iniciar"
        onPress={handleHome}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: '#483D8B',
    //marginTop: StatusBar.currentHeight
  },
  image: {
    height: 200,
    width: 200
  },
  titulo: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: "600",
    color: "#FFFFFF"
  },
  descricao: {
    fontSize: 16,
    marginHorizontal: 20,
    textAlign: 'center',
    marginVertical: 20,
    color: "#FFFFFF"
  },
  input: {
    height: 46,
    margin: 10,
    width: '90%',
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: '#0000001F',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    fontSize: 16    
  },
});
