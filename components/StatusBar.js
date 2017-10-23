import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class StatusBar extends React.Component{
  render() {
    return (
      <View style={styles.statusBarBackground}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: 20,
    backgroundColor: 'white'
  }
});
