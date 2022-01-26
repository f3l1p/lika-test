import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Special from '../SpecialText';
import LaikaButton from '../LaikaButton';
import colors from '../../constants/colors';

const FooterBigCard = () => {
  const showAlert = () =>
    Alert.alert('Guau!', 'Ahora eres un nuevo miembro!', [
      {
        text: 'Miau',
        style: 'Ok',
      },
    ]);
  return (
    <View style={styles.footerCard}>
      <View style={styles.footerContainer}>
        <View style={styles.colL}>
          <Text style={styles.text}>Paga unicamente</Text>
          <Text style={styles.priceText}>
            $69.000 <Text style={styles.textOpacity}>/año</Text>
          </Text>
        </View>
        <View style={styles.colR}>
          <View style={styles.miniCard}>
            <Text style={styles.textMiniCard}>
              Lo que quiere a $5.260 al mes
            </Text>
          </View>
        </View>
      </View>
      <LaikaButton name="Adquirir membresia" onPress={() => showAlert()} />
      <Text style={styles.terms}>
        <Special>Aplica terminos y condiciones</Special>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
  },

  textOpacity: {
    fontSize: 18,
    fontWeight: '200',
    color: 'white',
  },

  priceText: {
    fontSize: 28,
    fontWeight: '900',
    color: 'white',
  },

  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  miniCard: {
    padding: 4,
    backgroundColor: colors.gray800,
    borderRadius: 10,
    width: 100,
    height: 10,

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  textMiniCard: {
    color: 'white',
    fontSize: 11,
  },

  terms: {
    alignSelf: 'center',
    marginBottom: 30,
    fontSize: 9,
  },
});

export default FooterBigCard;
