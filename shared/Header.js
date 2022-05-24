import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    paddingTop: 100,
    backgroundColor: 'black'
  },
  headerText: {
    fontSize: 30,
    color: 'red',
    // paddingHorizontal: 10,
    alignSelf: 'center'
  }
});

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Shared component.</Text>
    </View>
  );
};

export default Header;