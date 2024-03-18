
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import AllProperties from './Screens/AllProperties';
import ButtomBar from "./Components/ButtomBar"
import CustomHeader from './Components/HomeHeader';
import Color from './constants/Color';

const Stack = createNativeStackNavigator();
export default function App() {


  async function getData() {
    const data = await fetch("mongodb+srv://sp:EyJqonVw4f9ghAUA@gmp.hjsqsoo.mongodb.net/");
    const actualData = await data.json();
    console.log(actualData);
  }
  getData();
  return (
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
  );
}

