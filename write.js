

import  React, {Component} from 'react';
import { View } from 'react-native';
import Header from './Header';
import Temp from './Temp';
import tw from 'tailwind-react-native-classnames';

class write extends Component {
    
  render() {
      return (  
          <View style={tw`h-full`}>
              <Header/>
              <Temp style={tw`w-12 h-12 mr-5 ml-auto mb-48`}/>
              <TextField
  id="first-name"
  label="Name"
  value={this.state.name}
  onChange={this.handleChange('name')}
  margin="normal"
/>
          </View>
      );
      
  }
}

export default write;