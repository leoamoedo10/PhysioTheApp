import React from 'react';
import { View, Image, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

import landingImg from '../../assets/person.png';

import styles from './style';

function Landing() {
  const navigation = useNavigation();

  function handleNavigateToExercicesPage() {
    navigation.navigate('ExercicesPhysio');
  }
  
  return (
    <View style={styles.container}>
      <Image source={landingImg}/>
      <Text style={styles.title}>
        Seja bem-vindo(a)! {'\n'}
        <Text style={styles.titleBold}>Vamos começar?</Text>
      </Text>

      <RectButton 
        style={styles.button} 
        onPress={handleNavigateToExercicesPage}
      >
        <Text style={styles.buttonText}>Começar</Text>
      </RectButton>
    </View>
  );
}

export default Landing;
