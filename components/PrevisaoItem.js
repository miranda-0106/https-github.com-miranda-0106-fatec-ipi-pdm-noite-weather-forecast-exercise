import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import Cartao from './Cartao';

const PrevisaoItem = (props) => {

    console.log(props.previsao);

    /*const [previsoes, setPrevisoes] = useState ([]);

    console.log('oi');

    const lat = props.previsao.city.coord.lat
    const lon = props.previsao.city.coord.lon
    const url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,daily&appid=600c63cc8d1080b996d777f746edd5a2";

        setPrevisoes([]);
        const target = url;
        fetch(target)
        .then((dados) => dados.json())
        .then((dados) => {
          setPrevisoes (dados["list"])
          Keyboard.dismiss()
        });

    const value = obterPrevisoes.setPrevisoes;*/

    return (
        <Cartao estilos={estilos.cartao}>
            <View style={estilos.tela}>
                <Image
                    style={estilos.imagem}
                    source={{uri: "https://openweathermap.org/img/wn/" + props.previsao.weather[0].icon + ".png"}}
                />
                <View>

                    <View style={estilos.primeiraLinha}>
                        <Text>{new Date(props.previsao.dt * 1000).toLocaleTimeString()} - {props.previsao.weather[0].description}</Text>
                    </View>

                    <View style={estilos.segundaLinha}>
                        <Text style={estilos.valor}>Min: {props.previsao.main.temp_min + "\u00B0"}</Text>
                        <Text style={estilos.valor}>max: {props.previsao.main.temp_max + "\u00B0"}</Text>
                        <Text style={estilos.valor}>Hum: {props.previsao.main.humidity}%</Text>
                    </View>

                </View>
            </View>
        </Cartao>
    )
}

const estilos = StyleSheet.create ({
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        margimTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    cartao: {
        marginBottom: 8
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    },
    valor: {
        marginHorizontal: 2
    }
});
export default PrevisaoItem;