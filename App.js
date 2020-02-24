import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      salario: 0,
      hora: 0,
      resultado: 0,
    };
    this.calcular = this.calcular.bind(this);
  }
  calcular() {
    let valor = (this.state.salario / 220) * 1.75 * this.state.hora;
    let s = this.state;
    s.resultado = valor;
    this.setState(s);
    alert('Valor R$ ' + valor.toFixed(2));
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.title}>Calculo Hora Extra</Text>
        <Text style={styles.label}>Digite seu salário:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="R$"
          onChangeText={salario => {
            this.setState({salario});
          }}
        />
        <Text style={styles.label}>Horas extras:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={hora => {
            this.setState({hora});
          }}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={this.calcular}>
          <Text style={styles.textButton}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>
          Valor: R$ {this.state.resultado.toFixed(2)}
        </Text>
        <Text style={styles.footer}>From Caique Queiroz</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#7159c1',
    padding: 20,
  },
  title: {
    margin: 20,
    fontSize: 25,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  label: {
    marginTop: 40,
    marginLeft: 15,
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    color: '#FFF',
    marginLeft: 15,
    borderBottomColor: '#FFF',
    borderBottomWidth: 2,
    width: 200,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonStyle: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 15,
  },
  textButton: {
    color: '#7159c1',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 10,
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
  },
  footer: {
    color: '#FFF',
    marginTop: 100,
  },
});
