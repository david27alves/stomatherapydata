import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import Routes from './src/routes'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }
  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    this.setState({ showRealApp: true });
  };

  render() {
    if (this.state.showRealApp) {
      //Real Application
      return (
        <Routes />
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          onDone={this._onDone}
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