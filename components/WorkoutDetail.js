import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const workout = {
  name: 'Bench Press',
  rep: 0,
  weight: 10,
}
export default class WorkoutDetail extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Workout 1</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
