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

import PrevisaoItem from './components/PrevisaoItem';
import Cartao from './components/Cartao';
import DadosCidade from './components/DadosCidade';

export default function App() {

  const [cidade, setCidade] = useState ('');
  const [previsoes, setPrevisoes] = useState ([]);
  const [dadosCidade, setDadosCidade] = useState ({});
  const [infoCidade, setInfoCidade] = useState({ current: {}, cidade: {} });

  const capturarCidade = (cidade) => {
    setCidade(cidade);
  }

  const obterinfoCidade = (coord) => {
    const target = `${endPoint}${oneCall}&lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}`;
    fetch(target)
      .then((dados) => {
        return dados.json()
      })
      .then((dados) => {
        setInfoCidade(dados);
      })
  }

  const obterPrevisoes = () => {
    setPrevisoes([]);
    const target = `${endPoint}${forecast}&q=${cidade}&appid=${apiKey}`;
    fetch(target).then((dados) => dados.json()).then((dados) => {
      setPrevisoes (dados["list"])
      setDadosCidade (dados["city"])
      obterinfoCidade(dados["city"]['coord'])
      Keyboard.dismiss()
    });
  };

  const endPoint = "https://api.openweathermap.org/data/2.5";
  const apiKey = '600c63cc8d1080b996d777f746edd5a2';
  const forecast = "/forecast?lang=pt_br&units=metric";
  const oneCall = "/onecall?lang=pt_br&units=metric";

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
      <View>
        <DadosCidade infoCidade={infoCidade} cidade={dadosCidade} estilos={styles}/>
      </View>
      <FlatList 
        data={previsoes}
        keyExtractor={(item) => item.dt_txt}  
        renderItem={
          ({ item }) => (
            <PrevisaoItem previsao={item} />
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
