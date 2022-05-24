import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../views/Home';
import Login from '../views/Login';

const RootStack = createStackNavigator({
    Home: Home,
    Login: Login,
}, {
    initialRouteName: 'Login',
}
);


const AppContainer = createAppContainer(RootStack);
export default AppContainer;