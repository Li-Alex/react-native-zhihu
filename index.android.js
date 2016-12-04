import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Navigator
} from 'react-native';
import {ArticleList} from './src/articleList.js'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
          
        }
    }
  render() {
    return (
        <View style={styles.container}>
          <StatusBar
            hidden={true}
          />
          <Navigator 
            initialRoute={{name:'index',index:0,component: ArticleList}}
            configureScene={(route) => {
              return Navigator.SceneConfigs.FloatFromRight;
            }}
            renderScene={(route,navigator) => {
              let Component = route.component;
              return <Component {...route.params} navigator={navigator} />
            }}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('test', () => App);
