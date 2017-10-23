import React from 'react';
import { Link} from 'react-router-native';
import  {
  StyleSheet,
  Text,
  View
} from 'react-native';
import ExerciseLogs from './ExerciseLogs';

export default class ExerciseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogs: false
    }
  }

  toggleLogs = () => {
    this.setState({
      showLogs: !this.state.showLogs,
    })
  }

  renderLogs() {
    return (
      <ExerciseLogs />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.exerciseName} onPress={this.toggleLogs}> {this.props.exercise.name}</Text>
        { this.state.showLogs ? this.renderLogs() : null }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ADD8E6',
    // minHeight: 30,
  },
  exerciseName: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 30,
  }
})
