import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class test extends Component {
    constructor(props){
        super(props)
        this.state = {
            result: null
        }
    }
  render() {
    let newsUrl = 'http://news-at.zhihu.com/api/4/news/latest'
    fetch(newsUrl).then(res => {
      return res.json()
    }).then(data => {
      this.setState({
        result: JSON.stringify(data)
      })
    }).catch(err => {
      console.log('err: ' + err)
    })
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                {newsUrl}
                {this.state.result}

            </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    overflow: 'scroll'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('test', () => test);
