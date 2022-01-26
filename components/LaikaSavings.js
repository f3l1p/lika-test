import React, {useState} from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import LaikaButton from './LaikaButton';
import Special from './SpecialText';
import {savingAction} from '../redux/actions';
import colors from '../constants/colors';
import {useDispatch, useSelector} from 'react-redux';

const LaikaSavings = props => {
  const CALC = useSelector(state => state.amount);
  const [userAmount, onChangeText] = useState('$0');

  const dispatchSavings = useDispatch();

  const calculateSavingsHandler = userAmount => {
    let onlyNumber = userAmount.slice(1);
    let result = onlyNumber * (15 / 100) * 12;

    dispatchSavings(savingAction(result));
  };

  if (userAmount === '') {
    onChangeText('$');
  }

  return (
    <View style={styles.savingsContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Calcula tu ahorro con la membresia</Text>
        <Text style={styles.text}>¿Cuanto gastas al mes en tu peludo?</Text>
      </View>
      <View style={styles.calcContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={userAmount}
            keyboardType="numeric"
          />
        </View>

        <LaikaButton
          name="calcular"
          onPress={() => calculateSavingsHandler(userAmount)}
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.text}>Te ahorras</Text>
        <Text style={styles.amount}>
          <Special>${CALC}</Special>
        </Text>
        <Text style={styles.text}>al año</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  savingsContainer: {
    margin: 40,
  },

  titleContainer: {
    alignSelf: 'center',
  },

  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    paddingHorizontal: 14,
  },

  text: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
  },

  calcContainer: {
    marginVertical: 18,
  },

  inputContainer: {
    backgroundColor: colors.gray700,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 12,
  },

  input: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 24,
  },

  amount: {
    fontSize: 30,
    marginVertical: 10,
  },

  resultContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default LaikaSavings;
