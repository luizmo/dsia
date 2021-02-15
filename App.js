import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const GreetingTitle = ({ text, name }) => (
  <View>
    <Text style={styles.sectionTitle}>{text}</Text>
    <Text style={styles.sectionName}>{name}</Text>
  </View>
)

const ImageBanner = ({ uri, width, height, caption }) => (
  <View style={styles.banner}>
    <Image source={{uri: uri}} style={{width, height}}/>
    <Text style={styles.bannerCaption}>{caption}</Text>
  </View>
)

const Button = ({ label, action }) => (
  <TouchableOpacity onPress={action} style={styles.button}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
)

export default function App(){
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
         <GreetingTitle text="Olá Seja Bem-Vindo" name="Fulano"/>
         <ImageBanner 
            uri="https://miro.medium.com/max/400/1*mrOXGyIa3BlPK80peLmEbA.png" 
            width={240} 
            height={240} 
            caption="Lorem ipsum"
          />
         <Button label="Entrar" action={() => console.log('click')}/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center', 
    marginTop: 20
  },
  sectionName: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center', 
  },
  banner:{
    marginVertical: 20,
    flex: 1, 
    alignItems: 'center'
  },
  bannerCaption:{
    fontSize: 12
  },
  button:{
    backgroundColor: '#03a1fc',
    marginHorizontal: 20,
    padding: 15
  
  },
  buttonText:{
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

