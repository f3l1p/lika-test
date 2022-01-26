import React from 'react';
import {StyleSheet, View, Text, Flatlist} from 'react-native';
import Special from './SpecialText';
import LikaCard from './LaikaCard';
import {members} from '../db/members';

const Experiences = first => {
  const listMembers = members.map(item => {
    return (
      <LikaCard
        key={item.id}
        ima={item.ima}
        title={item.title}
        text={item.text}
      />
    );
  });

  return (
    <View style={styles.membersContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Experiencias de</Text>
        <Text style={styles.title}>
          LAIKA <Special>Members</Special>
        </Text>
      </View>
      {listMembers}
    </View>
  );
};

const styles = StyleSheet.create({
  membersContainer: {
    marginTop: 20,
    marginBottom: 40,
  },

  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default Experiences;
