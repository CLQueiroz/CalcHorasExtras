import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type Props = {};
export default class HoraExtra extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      salario: 0,
      hora: 0,
      resultado: 0,
      tipocalculo: 0,
    };
    this.calcular = this.calcular.bind(this);
  }
  calcular() {
    let valor = (this.state.salario / 200) * 1.75 * this.state.hora;
    let s = this.state;
    s.resultado = valor;
    this.setState(s);
    alert('R$ ' + this.state.resultado.toFixed(2));
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.title}>Calculo Hora Extra</Text>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Digite seu salário:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="R$"
            onChangeText={salario => {
              this.setState({salario});
            }}
          />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Horas extras:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Hs"
            onChangeText={hora => {
              this.setState({hora});
            }}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.calcular}>
            <Text style={styles.textButton}>Calcular</Text>
          </TouchableOpacity>
          <Text style={styles.resultado}>
            Valor: R$ {this.state.resultado.toFixed(2)}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 25,
    alignItems: 'flex-start',
  },
  title: {
    margin: 20,
    fontSize: 25,
    color: '#7159c1',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  label: {
    color: '#7159c1',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    color: '#7159c1',
    borderBottomColor: '#7159c1',
    borderBottomWidth: 2,
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonStyle: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#7159c1',
    borderRadius: 15,
  },
  textButton: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 10,
    color: '#7159c1',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
  footer: {
    color: '#7159c1',
    width: '100%',
  },
  inputContent: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    width: '100%',
    padding: 5,
  },
});
