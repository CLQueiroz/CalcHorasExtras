import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

export default class Ferias extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.anotacoes}>Em desenvolvimento</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
