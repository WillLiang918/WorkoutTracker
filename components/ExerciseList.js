import React from 'react';
import {
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ExerciseItem from './ExerciseItem';

const Exercises = [
  {
    key: 1,
    name: 'Chest Press'
  },
  {
    key: 2,
    name: 'Lat Pulldown'
  },
  {
    key: 3,
    name: 'Squat'
  },
  {
    key: 4,
    name: 'Bicep Curl'
  }
]
export default class ExerciseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: Exercises,
    };
  }

  _renderItem = ({item}) => {
    <ExerciseItem
      key={item.key}
      exercise={item}
    />
  }

  render() {
    return (
      <ScrollView style={styles.exerciseListContainer}>
        <Text style={styles.workoutName}>My Workout</Text>
        {this.state.exercises.map((exercise, i) => {
          return (
            <ExerciseItem
              key={i}
              exercise={exercise}
            />
          )}
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  exerciseListContainer: {
    // justifyContent: 'flex-start',
  },
  workoutName: {
    fontSize: 40,
  }
});
