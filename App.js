import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Pages/HomeScreen';
import RegisterScreen from './Pages/RegisterScreen';
import LoginScreen from './Pages/LoginScreen'
import ComplaintScreen from './Pages/ComplaintScreen';
import CurrentComplaint from './Pages/CurrentComplaint'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentHome from './Pages/StudentHomeScreen/StudentHome';
import StudentProfile from './Pages/StudentProfile/StudentProfile';
import HodeLogin from './Pages/Hod/HodLogin'
import HodHomeScreen from './Pages/Hod/Hod-HomeScreen'
import StudentDetails from './Pages/StudentProfile/StudentDetails'
import Publish from './Pages/Hod/Publish';
// import SafeAreaView from 'react-native-safe-area-view';
export default function App() {
  const Stack = createStackNavigator();
  return (
        // <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen  name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="StudentHome" component={StudentHome} />
        <Stack.Screen name="StudentProfile" component={StudentProfile}   />
        <Stack.Screen name="ComplaintScreen" component={ComplaintScreen} />
        <Stack.Screen name="CurrentComplaint" component={CurrentComplaint} />
        <Stack.Screen name="HodeLogin" component={HodeLogin} />
        <Stack.Screen name="HodHomeScreen" component={HodHomeScreen} />
        <Stack.Screen name="StudentDetails" component={StudentDetails} />
        <Stack.Screen name="Publish" component={Publish} />

</Stack.Navigator>
 {/* <HomeScreen />
    <ComplaintScreen />
    <RegisterScreen />
     <LoginScreen /> */}
    
      </NavigationContainer>
        // </SafeAreaView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#90CACD',
flex:1  

  },
});
