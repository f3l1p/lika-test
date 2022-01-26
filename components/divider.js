import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const Divider = () => {
  return <View style={styles.divider}></View>;
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 4,
    flex: 1,
    width: '92%',
    alignSelf: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: colors.sunshineGold,
  },
});

export default Divider;
