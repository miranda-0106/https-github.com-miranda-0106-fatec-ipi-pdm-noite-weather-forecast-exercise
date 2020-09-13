import React, { useState } from 'react';
import { 
  FlatList, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  Button, 
  Keyboard 
} from 'react-native';

import PrevisaoItem from './components/Previsaoitem';

export default function App() {

  const [cidade, setCidade] = useState ('');
  const [previsoes, setPrevisoes] = useState ([]);

  const capturarCidade = (cidade) => {
    setCidade(cidade);
  }

  const obterPrevisoes = () => {
    setPrevisoes([]);
    const target = endPoint + cidade + "&appid=" + apiKey;
    fetch(target)
    .then((dados) => dados.json())
    .then((dados) => {
      setPrevisoes (dados)
      Keyboard.dismiss()
    });
    console.log(previsoes.toString());
  };

  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q="
  const apiKey = '600c63cc8d1080b996d777f746edd5a2';
  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          style={styles.nomeCidade}
          placeholder="Digite o nome da cidade"
          value={cidade}
          onChangeText={capturarCidade} 
        />
        <Button
          title="ok"
          onPress={obterPrevisoes}
        />
      </View>
      <FlatList 
        data={previsoes}
        renderItem={
          previsao => (
            <PrevisaoItem previsao={previsao.item} />
          )
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FFF'
  },
    entrada: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8
    },
    nomeCidade: {
      padding: 12,
      borderBottomColor: '#BB96F3',
      borderBottomWidth: 2,
      textAlign: 'left',
      flexGrow: 0.9
    }
});
