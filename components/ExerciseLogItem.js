import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class ExerciseLogItem extends React.Component {
  render() {
    return(
      <View style={styles.logRow}>
        <Text style={styles.logItemAttr}>{this.props.logItem.date}</Text>
        <Text style={styles.logItemAttr}>{this.props.logItem.rep}</Text>
        <Text style={styles.logItemAttr}>{this.props.logItem.weight}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  logItemAttr: {
    flex: 1
  }
});
