import React from 'react';
import { Image, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import exerciceImg from '../../assets/hand.png';
import backIcon from '../../assets/icon/back.png';

import styles from './style';

function ExercicesPhysio() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('Landing');
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={handleGoBack}>
        <Image source={backIcon} resizeMode="contain" />
      </BorderlessButton>

      <View style={styles.image}>
        <Image source={exerciceImg} />
      </View>
    </View>
  );
}

export default ExercicesPhysio;