import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40
  },

  button: {
    height: 50,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9871f5',
    marginTop: 24
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 20
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold'
  },
});

export default styles;