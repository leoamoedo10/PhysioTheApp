import React from 'react';
import { View, Image, Text } from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import landingImg from '../../assets/person.png';

import styles from './style';

function Landing() {
  return (
    <View style={styles.container}>
      <Image source={landingImg}/>

      <RectButton style={styles.button}>
        <Text style={styles.buttonText}>INICIAR</Text>
      </RectButton>
    </View>
  );
}

export default Landing;
