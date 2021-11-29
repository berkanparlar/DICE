import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  Button
} from 'react-native';
import DiceOne from './image/dice-one.png';
import DiceTwo from './image/dice-two.png';
import DiceThree from './image/dice-three.png';
import DiceFour from './image/dice-four.png';
import DiceFive from './image/dice-five.png';
import DiceSix from './image/dice-six.png';


const App = () => {
  let dicePic = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix, DiceThree, DiceFour, DiceFive, DiceSix, DiceFive]
  const[uri ,setUri] = useState(DiceThree)
  const[uri2 ,setUri2] = useState(DiceThree)
  function movement  ()  {
    let rnd = Math.floor(Math.random() * 10)
    let numStill = dicePic[rnd]
    console.log(numStill)
    if (numStill == 0) {
      setUri(DiceOne)
    }
    else if (numStill == 1) {
      setUri(DiceTwo)
    }
    else if (numStill == 2) {
      setUri(DiceThree)
    }
    else if (numStill == 3) {
      setUri(DiceFour)
    }
    else if (numStill == 4) {
      setUri(DiceFive)
    }
    else if (numStill == 5) {
      setUri(DiceSix)
    }
    else if (numStill == 6) {
      setUri(DiceOne)
    }
    else if (numStill == 7) {
      setUri(DiceTwo)
    }
    else if (numStill == 8) {
      setUri(DiceThree)
    }
    else if (numStill == 9) {
      setUri(DiceSix)
    }
    else if (numStill == 10) {
      setUri(DiceOne)
    }
  }

  function movement2() {
    let rnd = Math.floor(Math.random() * 10)
    let numStill = dicePic[rnd]
    console.log(numStill)
    if (numStill == 0) {
      setUri2(DiceOne)
    }
    else if (numStill == 1) {
      setUri2(DiceTwo)
    }
    else if (numStill == 2) {
      setUri2(DiceThree)
    }
    else if (numStill == 3) {
      setUri2(DiceFour)
    }
    else if (numStill == 4) {
      setUri2(DiceFive)
    }
    else if (numStill == 5) {
      setUri2(DiceSix)
    }
    else if (numStill == 6) {
      setUri2(DiceOne)
    }
    else if (numStill == 7) {
      setUri2(DiceTwo)
    }
    else if (numStill == 8) {
      setUri2(DiceThree)
    }
    else if (numStill == 9) {
      setUri2(DiceSix)
    }
    else if (numStill == 10) {
      setUri2(DiceOne)
    }
  }
  const dubleMovemnt = () =>{
    movement();
    movement2();
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textSize}>ZAR OYUNU</Text>
      </View>
      <View style={styles.mainGame}>
        <View style={styles.diceMain}>
          <View style={styles.diceOne}>
            <Image source={uri} style={{ width: 190, height: 190 }} />
          </View>
          <View style={styles.diceTwo}>
            <Image source={uri2} style={{ width: 190, height: 190 }} />
          </View>
        </View>
      </View>
      <Button
        onPress={dubleMovemnt}
        title="Zar at"
        style={styles.buttonStill}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#deeaee",
  },
  header: {
    height: 60,
  },
  textSize: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
  },
  mainGame: {
    flex: 6,
    
  },
  diceMain: {
    flex:1,
    flexDirection: 'row',
    marginTop:100,
  },
  diceOne: {
    flex:1,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent:'center',
  },
  diceTwo: {
    flex:1,
    textAlign: 'center',
    justifyContent:'center',
  },
  buttonStill:{
    width:100,
    height: 100,
    backgroundColor: "#e4d1d1",
  }
});

export default App;
