import BottomBar from "./Components/BottomNavigation/BottomBar";
import CustomHeader from './Components/HomeHeader';
import Color from './constants/Color';
import { Provider } from 'react-redux';
import Store from './Store/Store'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';


import RoomDetailsScreen from './Screens/RoomDetailsScreen';
import AllProperties from "./Screens/AllProperties";
import SearchFilter from "./Screens/SearchFilter";



import Config from 'react-native-config';

console.log(Config)

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
          {/* All Properties screen */}
          <Stack.Screen name='All Properties' component={AllProperties} />


          {/* Properties Details Screen */}
          <Stack.Screen name="RoomDetails" component={RoomDetailsScreen} options={{ title: 'Room Details' }} />


          {/* Properties Search Screen */}
          <Stack.Screen name="SearchFilter" component={SearchFilter} options={{ title: 'Filters' }} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}