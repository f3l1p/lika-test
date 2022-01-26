import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import colors from '../constants/colors';

const LaikaButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => props.onPress()}>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default LaikaButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.sunshineGold,
    height: 50,
    width: '90%',
    borderRadius: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },

  text: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '800',
    color: 'black',
  },
});
