import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
}
  from 'react-native';

import Cartao from './Cartao';

const DadosCidade = (props) => {
  const horario = time => (new Date(time * 1000).toLocaleTimeString());
                        
  return (
    <Cartao >
      <View style={{ ...styles.row, padding: 14 }}>
        <View style={styles.coluna}>

          <View style={styles.row}>
            <View style={styles.sol}>
              <Image
                style={styles.imagem}
                source={{ uri: "https://www.iconninja.com/files/454/995/651/weather-sun-morning-sunrise-icon.png" }}
              />
              <Text style={styles.hora}> Sunrise: {props.infoCidade.current.sunrise ? horario(props.infoCidade.current.sunrise) : ''} </Text>

            </View>
            <View style={styles.sol}>
              <Image
                style={styles.imagem}
                source={{ uri: "https://icons-for-free.com/iconfiles/png/512/sun+sunset+weather+icon-1320196636209475292.png" }}
              />
              <Text style={styles.hora}> Sunset: {props.infoCidade.current.sunset ? horario(props.infoCidade.current.sunset) : ''}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text>Temp: {props.infoCidade.current.temp + "\u00B0" + "C"}</Text>
            <Text>Sensação: {props.infoCidade.current.feels_like + "\u00B0" + "C"}</Text>
          </View>
        </View>
      </View>

    </Cartao>)
}

const styles = StyleSheet.create({
  bandeira: {
    width: 63,
    height: 45,
    borderWidth: 1,
    borderColor: '#d1d1d1'
  },
  imagem: {
    width: 50,
    height: 50
  },
  sol: {
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "space-between", 
    padding:7
  },
  coluna: {
    maxWidth: 280,
  },
  title: {
    fontSize: 24,
    width: '100%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center"
  },
  col:{
    flexDirection: 'column',
    alignItems: "center"
  },
  hora: {
    fontWeight: '700'
  }
});

export default DadosCidade;