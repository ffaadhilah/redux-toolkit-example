// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react'
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

// Import redux and react-redux
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { store } from './src/store/store'
import reducer from './src/reducer'
// import reducers from './src/reducers'
// the 'reducers' is the folder name
// const store = createStore(reducer)

const AppContainer = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);