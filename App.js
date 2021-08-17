

import  React, {Component} from 'react';
import { View } from 'react-native';
import Header from './Header';
import Temp from './Temp';

class App extends Component {
  render() {
      return (  
          <View  style={tw`h-full `}>
              <Header/>
              <Temp style={tw`w-12 h-12 mr-5 ml-auto mb-48 mt-auto rounded-full bg-red-300`}/>
          </View>
      );
  }
}

