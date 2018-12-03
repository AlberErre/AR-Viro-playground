import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';

const apiKey = "YOUR_API_KEY_HERE";
const arScenes = {
  'HelloWorldSceneAR': require('./src/HelloWorldSceneAR')
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ViroARSceneNavigator
          initialScene={{
            scene: arScenes['HelloWorldSceneAR'],
          }}
          apiKey={apiKey}
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
});
