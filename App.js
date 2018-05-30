import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {
  renderItem = ({item}) => {
    return(
      <Text>{item.name} || {item.request}</Text>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Help App</Text>
        </View>
        <Text>Open up App.js to start working on your app!</Text>
        <FlatList
          data={helpRequests}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'skyblue',
    height: 200
  }
});

const helpRequests = [
  {key: '1', name: "Jon", request:"Where is McDonald's?"},
  {key: '2', name: "Jenny", request:"I need someone to take me to airport"},
  {key: '3', name: "Jake", request:"How do I do this assignment?"},
  {key: '4', name: "Jason", request:"I need a hammer"},
  {key: '5', name: "Jacob", request:"Where can I get a car?"}
]
