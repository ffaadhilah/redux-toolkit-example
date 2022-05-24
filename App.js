/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {StyleSheet, Text, View, Button} from 'react-native';

import Header from './shared/Header';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import React, { Component, useContext, createContext } from 'react';
import AppContainer from './src/route';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
});

class App extends Component {
    render() {
        return <AppContainer />;
    }
}

// export default App;

// useState hooks example
// function App() {

//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     alert('Hello i am a count modal ');
//     // return () => {
//     //   setCount(3);
//     // };
//   },[]);

//   const [test, setTest] = useState(null);
//   useEffect(() => {
//     (test == null) ? alert('welcome to test modal ') : alert('changed!');
//   }, [test]);

//   return (
//     <View
//       style={{justifyContent: 'center', alignItems: 'center', marginTop: 200}}>
//       <Text>Count Me {count}</Text>
//       <Button title="Count" onPress={() => setCount(count + 1)} />
//       <Text style={{color: test === true ? 'green' : 'red'}}>{String(test)}</Text>
//       <Button title="Testing the updated state" onPress={() => setTest(!test)} />
//     </View>
//   );
// }


// // useContext hooks example
// const TitleContext = createContext();

// const UiComponent = props => {
//   let title = useContext(TitleContext);
//   return (
//     <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 200}}>
//       <Text>Apa Context Data Berhasil: </Text>
//       <Text style={{fontWeight:'bold'}}> {title}</Text>
//     </View>
//   );
// };

// const App = props => {
//   return (
//     <TitleContext.Provider value="Data dari komponen lainnn">
//         <UiComponent />
//     </TitleContext.Provider>
//   );
// };


export default App;


