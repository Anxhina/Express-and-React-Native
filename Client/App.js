import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import ReduxThunk from 'redux-thunk';

import productsReducer from './store/reducers/products';
import authReducer from './store/reducers/auth';
import NavigationContainer from './navigation/NavigationContainer';
import PlacesNavigator from './navigation/PlacesNavigator';
import placesReducer from './store/actions/places-reducer';
import { init } from './helpers/db';



const rootReducer = combineReducers({
  products: productsReducer,
  auth: authReducer,
  places: placesReducer

});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));





const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return (
    <Provider store={store}>

      <NavigationContainer />
    </Provider>
  );
}
