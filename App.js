
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import AllProperties from './Screens/AllProperties';
import ButtomBar from "./Components/ButtomBar"
import CustomHeader from './Components/HomeHeader';
import Color from './constants/Color';
import { Provider } from 'react-redux';
import Store from './Store/Store'

const Stack = createNativeStackNavigator();
export default function App() {



  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={ButtomBar} options={{
            headerTitle: () => <CustomHeader />,
            headerStyle: {
              backgroundColor: Color.header,
              marginLeft: 0, // Set marginLeft to 0 to remove the left margin
            },
          }} />
          <Stack.Screen name='All Properties' component={AllProperties} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


