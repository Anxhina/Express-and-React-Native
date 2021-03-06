import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import PlacesNavigator from '../../navigation/PlacesNavigator';
import placesReducer from '../../store/actions/places-reducer';
import { init } from '../../helpers/db';

init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch(err => {
    console.log('Initializing db failed.');
    console.log(err);
  });

  const fetchFonts = () => {
    return Font.loadAsync({
      'open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf')
    });
  };
  
const rootReducer = combineReducers({
  places: placesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function Posts() {
  return (
      <PlacesNavigator />
  );
}
