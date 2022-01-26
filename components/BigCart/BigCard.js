import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import colors from '../../constants/colors';
import Special from '../SpecialText';
import Divider from '../divider';
import FooterBigCard from './FooterBigCard';
import OtherBenefits from './OtherBenefits';

const BigCard = () => {
  return (
    <View style={styles.bigCardContainer}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.text}>Beneficios los 365 dias del año</Text>
        </View>

        <View style={styles.textArea}>
          <Image
            source={require('../../assets/Group2533.png')}
            style={styles.imageLogo}
          />
          <Text style={styles.textBold}>
            <Special>15% </Special>
            de descuento en todos los productos
          </Text>
        </View>
        <View style={styles.textArea}>
          <Image
            source={require('../../assets/Group2533.png')}
            style={styles.imageLogo}
          />
          <Text style={styles.textSemiBold}>
            Domicilio
            <Special> gratis </Special>
            <Text style={styles.textOpacity}>*apartir de $120.000</Text>
          </Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>Ver otros beneficios </Text>
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assets/arrow_down.png')}
          />
        </View>

        <OtherBenefits />
      </View>

      <Divider />

      <FooterBigCard />
    </View>
  );
};

export default BigCard;

const styles = StyleSheet.create({
  bigCardContainer: {
    backgroundColor: colors.laikaColor,
    width: '80%',
    borderWidth: 1,
    borderColor: colors.sunshineGold,
    borderRadius: 10,

    marginTop: 40,
    alignSelf: 'center',

    flex: 1,
    flexDirection: 'column',
  },

  container: {
    marginVertical: 16,
    alignSelf: 'center',
    width: '90%',
    height: 'auto',
  },

  title: {
    marginVertical: 18,
    flex: 1,
    flexDirection: 'row',
  },
  textOpacity: {
    fontSize: 14,
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

  textArea: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 12,
  },

  textBold: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },

  textSemiBold: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },

  text: {
    color: 'white',
    fontSize: 16,
  },
});
