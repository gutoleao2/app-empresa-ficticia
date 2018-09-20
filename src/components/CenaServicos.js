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

const detalheServico = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {
  render() {
    return (
      <View style={styles.viewPrincipal}>
        <StatusBar 
          backgroundColor='#19D1C8'
        />

        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#19D1C8'/>

        <View style={styles.cabecalho}>
          <Image source={detalheServico} />
          <Text style={styles.txtTitulo}>Serviços</Text>
        </View>
        <View style={styles.detalheServico}>         
          <Text style={styles.txtServicos}> - Consultoria </Text>
          <Text style={styles.txtServicos}> - Processos </Text>
          <Text style={styles.txtServicos}> - Acompanhamento </Text>
          
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
    color: '#19D1C8',
    marginLeft: 10,
    marginTop: 25
  },
  detalheServico: {
    padding: 25,
    marginTop: 20 
  },
  txtServicos: {
    fontSize: 18
  },
  viewPrincipal:{
    flex: 1,
    backgroundColor: '#FFF'
  }
});
