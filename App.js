import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleDisplayText = () => {
    setDisplayText(inputText);
    setInputText('');
  };
  const localPhoto = require('./assets/medoPhoto.png');

  return (
    <View style={styles.container}>
    <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>1st task "Name App"</Text>
      </View>
         <Image source={localPhoto} style={styles.photoContainer} />
        <TextInput
          style={styles.input}
          placeholder="Enter text"
          onChangeText={handleInputChange}
          value={inputText}
        />
        <View style={styles.buttonStyle}>
        
        <Button
        
        color={"#87ceeb"}
          title="Print"
          onPress={handleDisplayText}
        />
        </View>
        <Text style={styles.displayText}>Hello, {displayText}</Text>
      </View>
  );

}

const styles = StyleSheet.create({
  buttonStyle:{
borderRadius:50,
width:100
  },
  photoContainer:{
    margin:30,
  width: 200, height: 300,
  borderRadius:50,
  },
  
  container: {
    flex: 1,
    marginTop:50,
    alignItems:'center',
  },
  appBar: {
    width:'100%',
    height: 50,
    backgroundColor: '#87ceeb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBarTitle: {
    color: 'white',
    fontSize: 20,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
  },
  displayText: {
    fontSize: 30,
    marginTop: 20,
  },
});

export default App;