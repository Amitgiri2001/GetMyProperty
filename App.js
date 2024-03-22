import BottomBar from "./Components/BottomNavigation/BottomBar";
import CustomHeader from './Components/HomeHeader';
import Color from './constants/Color';
import { Provider } from 'react-redux';
import Store from './Store/Store'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';


import RoomDetailsScreen from './Screens/RoomDetailsScreen';
import AllProperties from "./Screens/AllProperties";

const Stack = createNativeStackNavigator();
export default function App() {



  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={BottomBar} options={{
            headerTitle: () => <CustomHeader />,
            headerStyle: {
              backgroundColor: Color.secondaryHeader,
              marginLeft: 0, // Set marginLeft to 0 to remove the left margin
            },
          }} />
          <Stack.Screen name='All Properties' component={AllProperties} />
          <Stack.Screen name="RoomDetails" component={RoomDetailsScreen} options={{ title: 'Room Details' }} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}