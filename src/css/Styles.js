import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: 'pink',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerNavigation: {
    backgroundColor: 'pink',
  },
});

export default styles;
