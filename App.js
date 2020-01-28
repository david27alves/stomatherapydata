import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }
  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    // After user skip the intro slides. Show real app throug
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };

  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 30,
            }}>
            Stomatherapydata 
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 30,
            }}>
          💉⚕️</Text>

          
        </View>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          //comming from the JsonArray below
          onDone={this._onDone}
          //Handler for the done On last slide
          showSkipButton={false}
          onSkip={this._onSkip}
          bottomButton

        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 256,
    height: 256,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 100,
  },
});

const slides = [
  {
    key: 's1',
    text: 'Olá enfermeiro(a), seja bem-vindo ao aplicativo Stomatherapydata. ',
    title: 'Stomatherapydata',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: require('./assets/medical.png'),
    imageStyle: styles.image,
    backgroundColor: '#3490dc',


  },
  {
    key: 's2',
    title: 'Stomatherapydata',
    titleStyle: styles.title,
    textStyle: styles.text,
    text: 'Esse instrumento foi desenvolvido para guiar os profissionais de enfermagem da área de estomaterapia e afins, na implementação do processo de enfermagem.',
    image: require('./assets/medical2.png'),
    imageStyle: styles.image,
    backgroundColor: '#3490dc',
  },
  {
    key: 's3',
    title: 'Stomatherapydata',
    titleStyle: styles.title,
    textStyle: styles.text,
    text: 'Vamos lá!',
    image: require('./assets/medical3.png'),
    imageStyle: styles.image,
    backgroundColor: '#3490dc',
  },  
];