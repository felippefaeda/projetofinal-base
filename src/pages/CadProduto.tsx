import * as React from 'react';
import { useState } from 'react';
import {
    StatusBar,
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Picker } from '@react-native-picker/picker';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../components/Button';

export function CadProduto() {
    const [codigo, setCodigo] = useState(0);
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState(0.0);
    const [quantidade, setQuantidade] = useState(0.0);
    const [classificacao, setClassificacao] = useState(1);
    const [isActive, setActive] = useState(true);

    const navigation = useNavigation();

    function salvarProduto() {
        alert("O produto " + codigo + " - " + descricao + " foi salvo com sucesso!");
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#E3E3E3"
            />

            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>
                    Novo Produto
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

            <Text style={styles.textLabel}>Código</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o código do produto "
                keyboardType="numeric"
                onChangeText={(valor) => setCodigo(Number(valor))}
            />

            <Text style={styles.textLabel}>Descrição</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite a descrição do produto"
                keyboardType="default"
                onChangeText={(valor) => setDescricao(valor)}
            />

            <View style={{ flexDirection: 'row' }}>

                <View style={{ flex: 1 }}>
                    <Text style={styles.textLabel}>Preço</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o Preço"
                        keyboardType="numeric"
                        onChangeText={(valor) => setPreco(Number(valor))}
                    />
                </View>

                <View style={{ flex: 1 }}>
                    <Text style={styles.textLabel}>Quantidade</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a Quantidade"
                        keyboardType="numeric"
                        onChangeText={(valor) => setQuantidade(Number(valor))}
                    />
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.textLabel}>Classificação:</Text>
                <Picker
                    style={{ width: 200, color: "#FFF" }}
                    selectedValue={classificacao}
                    onValueChange={(itemValue, itemIndex) =>
                        setClassificacao(itemValue)
                    }>
                    <Picker.Item label="Perecível" value="1" />
                    <Picker.Item label="Não Perecível" value="2" />
                    <Picker.Item label="Limpeza" value="3" />
                    <Picker.Item label="Vestuário" value="4" />
                    <Picker.Item label="Limpeza" value="5" />
                    <Picker.Item label="Higiene" value="6" />
                </Picker>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <BouncyCheckbox 
                    size={25}
                    fillColor="black"
                    unfillColor="#FFFFFF"
                    iconStyle={{ borderColor: "black" }}
                    style={{ marginLeft: 10 }}
                    onPress={(isChecked: boolean) => setActive(isChecked)} 
                />
                <Text style={{ color: "#FFF" }}>Produto Ativo</Text>
            </View>            

            <View style={styles.result}>
                <Button title="Salvar" onPress={salvarProduto} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#483D8B',
        //marginTop: StatusBar.currentHeight
    },
    input: {
        height: 46,
        margin: 5,
        paddingLeft: 10,
        borderWidth: 2,
        borderColor: '#0000001F',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        fontSize: 16
    },
    result: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
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
    },
    textLabel: {
        marginLeft: 10,
        color: "#FFF"
    }
});
