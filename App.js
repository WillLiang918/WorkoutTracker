import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch} from 'react-router-native';
import WorkoutDetail from './components/WorkoutDetail';
import ExerciseList from './components/ExerciseList';
import ExerciseLogs from './components/ExerciseLogs';
import StatusBar from './components/StatusBar';

export default class App extends React.Component {
  render() {
    return (
        <NativeRouter>
          <View style={styles.textContainer}>
              <StatusBar/>
            <Switch>
              <Route path="/exercise/:id" component={ExerciseLogs}/>
              <Route path="/" component={ExerciseList}/>
            </Switch>
          </View>
        </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  emptyContainer: {

  },
  textContainer: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
