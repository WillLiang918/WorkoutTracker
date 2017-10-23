import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import { Link } from 'react-router-native';
import ExerciseLogItem from './ExerciseLogItem';

const ExerciseLogList = [
  {
    date: '10-07-17',
    rep: 8,
    weight: 20,
  },
  {
    date: '10-10-17',
    rep: 8,
    weight: 25,
  },
  {
    date: '10-13-17',
    rep: 8,
    weight: 30,
  }
]

export default class ExerciseLogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseLogs: ExerciseLogList,
      newRep: null,
      newWeight: null,
    }
  }

  saveNewLog = () => {
    let currentLog = this.state.exerciseLogs;
    const today = new Date();

    const date = [
      parseInt(today.getMonth()+1),
      today.getDate(),
      today.getFullYear()
    ].join('-')

    const newLogEntry = {
      date: date,
      rep: this.state.newRep,
      weight: this.state.newWeight,
    }

    currentLog.unshift(newLogEntry);

    this.setState({
      exerciseLog: currentLog,
      newRep: null,
      newWeight: null,
    })
  }

  renderLogHeaders() {
    const LogItemHeader = {
      date: 'Date',
      rep: 'Rep',
      weight: 'Weight'
    };

    return (
      <ExerciseLogItem
        logItem={LogItemHeader}
      />
    )
  }

  renderNewLog() {
    return (
      <View style={styles.newLogRow}>

        <TextInput
          style={styles.newLogItemAttr}
          placeholder="REPS"
          onChangeText={(text) => this.setState({newRep: text})}
          value={this.state.newRep}
        />
        <TextInput
          style={styles.newLogItemAttr}
          placeholder="WEIGHT"
          onChangeText={(text) => this.setState({newWeight: text})}
          value={this.state.newWeight}
        />
        <Text onPress={this.saveNewLog} style={styles.newLogItemAttr}>Save</Text>
      </View>
    )
  }

  renderShowMore() {
    return(
      <Text>See More</Text>
    )
  }

  render() {
    return(
      <ScrollView style={styles.exerciseLogs}>
        { this.renderNewLog() }

        <Text>LOGS:</Text>
        { this.renderLogHeaders() }
        { this.state.exerciseLogs.map((logItem, idx) => {
          return (
            <ExerciseLogItem
              key={idx}
              logItem={logItem}
            />
          )
        })}
        { this.renderShowMore() }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  newLogRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  newLogItemAttr: {
    flex: 1,
    fontSize: 20,
  },
})
