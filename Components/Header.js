import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping List',
};

const styles = StyleSheet.create({
  header: {
    height: 85,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },

  text: {
    color: '#fff',
    fontSize: 20,
    marginTop: 25,
    textAlign: 'center',
  },
});

export default Header;
