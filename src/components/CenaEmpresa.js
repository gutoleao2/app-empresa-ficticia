import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

//importar o componente barra navegação
import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  render() {
    return (
      <View style={styles.viewPrincipal}>
        <StatusBar 
          backgroundColor='#EC7148'
        />

        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#EC7148' />

        <View style={styles.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={styles.txtTitulo}>A Empresa</Text>
        </View>
        <View style={styles.detalheEmpresa}>         
          <Text style={styles.txtEmpresa}>
            Primeiro eu queria cumprimentar os internautas. 
            -Oi Internautas! Depois dizer que o meio ambiente 
            é sem dúvida nenhuma uma ameaça ao desenvolvimento 
            sustentável. E isso significa que é uma ameaça pro 
            futuro do nosso planeta e dos nossos países. 
            O desemprego beira 20%, ou seja, 1 em cada 4 portugueses
          </Text>          
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 5
  },
  txtTitulo: {
    fontSize: 30,
    color: '#EC7148',
    marginLeft: 10,
    marginTop: 25
  },
  detalheEmpresa: {
    padding: 25,
    marginTop: 20 
  },
  txtEmpresa: {
    fontSize: 18
  },
  viewPrincipal:{
    flex: 1,
    backgroundColor: '#FFF'
  }
});
