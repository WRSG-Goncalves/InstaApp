import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import { FeedProps ,ListState }   from '../Interface/interface';


class Lista extends Component<FeedProps,{}> { 
  constructor(props: FeedProps) {
    super(props);
    this.state = {       
      feed: this.props.data
    };
  }

  render(){
    return(
      <View>
        <Text>Feed...</Text>
      </View>
    );
  }
}

export default Lista;