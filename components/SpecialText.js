import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const SpecialText = props => {
  return <Text style={({...props.style}, styles.text)}>{props.children}</Text>;
};

export default SpecialText;

const styles = StyleSheet.create({
  text: {
    color: colors.sunshineGold,
  },
});
