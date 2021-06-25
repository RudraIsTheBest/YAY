import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Redbutton extends Component{
  render(){
    return(
 <Button color="red" title="Learn More"></Button>

    );
  }
}
export default class App extends Component {

  
  render() {
    return (
      <View style={{marginTop:300}}>
       <Redbutton/>
       <Text style= {{marginLeft:140 ,color:"blue"}}> Welcome </Text>
    </View>

    );
  }
}
