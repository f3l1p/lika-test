import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {otherBenefits} from '../../db/otherBenefits';

const OtherBenefits = () => {
  const listOthers = otherBenefits.map(item => {
    return (
      <View key={item.id} style={styles.textArea}>
        <Image
          style={styles.imageLogo}
          source={require('../../assets/arrow.png')}
        />
        <Text style={styles.textOpacity}>{item.text}</Text>
      </View>
    );
  });

  return <View>{listOthers}</View>;
};

const styles = StyleSheet.create({
  textArea: {
    flex: 1,
    flexDirection: 'row',
    width: '98%',
    marginBottom: 4,
  },

  textOpacity: {
    fontSize: 16,
    fontWeight: '200',
    color: 'white',
  },

  imageLogo: {
    resizeMode: 'stretch',
    height: 15,
    width: 15,
    marginRight: 8,
    marginBottom: 16,
  },
});

export default OtherBenefits;
