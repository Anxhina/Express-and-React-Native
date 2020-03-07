import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import PlacesListScreen from '../screens/meet/PlacesListScreen';
import PlaceDetailScreen from '../screens/meet/PlaceDetailScreen';
import PostScreen from '../screens/meet/PostScreen';
import MapScreen from '../screens/meet/MapScreen';
import Colors from '../constants/Colors';

const PlacesNavigator = createStackNavigator(
  {
    Places: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: PostScreen,
    Map: MapScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
  }
);

export default createAppContainer(PlacesNavigator);
