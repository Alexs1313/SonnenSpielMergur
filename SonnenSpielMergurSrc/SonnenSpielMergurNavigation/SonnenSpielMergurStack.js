import { createStackNavigator } from '@react-navigation/stack';
import SonnenSpielMergurMain from '../SonnenSpielMergurScreens/SonnenSpielMergurMain';
import SonnenSpielMergurOnboard from '../SonnenSpielMergurScreens/SonnenSpielMergurOnboard';
import SonnenSpielMergurSettings from '../SonnenSpielMergurScreens/SonnenSpielMergurSettings';
import SonnenSpielMergurLocations from '../SonnenSpielMergurScreens/SonnenSpielMergurLocations';
import SonnenSpielMergurCardDetails from '../SonnenSpielMergurScreens/SonnenSpielMergurCardDetails';
import SonnenSpielMergurSaved from '../SonnenSpielMergurScreens/SonnenSpielMergurSaved';

const Stack = createStackNavigator();

const SonnenSpielMergurStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SonnenSpielMergurOnboard"
        component={SonnenSpielMergurOnboard}
      />
      <Stack.Screen
        name="SonnenSpielMergurMain"
        component={SonnenSpielMergurMain}
      />
      <Stack.Screen
        name="SonnenSpielMergurSettings"
        component={SonnenSpielMergurSettings}
      />
      <Stack.Screen
        name="SonnenSpielMergurLocations"
        component={SonnenSpielMergurLocations}
      />
      <Stack.Screen
        name="SonnenSpielMergurCardDetails"
        component={SonnenSpielMergurCardDetails}
      />
      <Stack.Screen
        name="SonnenSpielMergurSaved"
        component={SonnenSpielMergurSaved}
      />
    </Stack.Navigator>
  );
};

export default SonnenSpielMergurStack;
