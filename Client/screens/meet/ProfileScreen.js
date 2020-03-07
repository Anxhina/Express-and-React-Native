import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import { useDispatch } from 'react-redux';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Colors from '../../constants/Colors';

import ImagePicker from '../../components/meet/ImagePicker';

import { init } from '../../helpers/db';
init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch(err => {
    console.log('Initializing db failed.');
    console.log(err);
  });

const ProfileScreen = props => {
  const [titleValue, setTitleValue] = useState('');
  const [selectedImage, setSelectedImage] = useState();

  const dispatch = useDispatch();

  const titleChangeHandler = text => {
    setTitleValue(text);
  };

  const imageTakenHandler = imagePath => {
      setSelectedImage(imagePath);
  };
_loadInitialState = async () => {

var value = await AsyncStorage.getItem('email');
if (value !== null) {
  this.setState({email: value});

}
}





  return (
    <ScrollView>
      <View>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Your favorite food is?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <ImagePicker onImageTaken={imageTakenHandler} />
        <Button
          title="Save Photo"
          color={Colors.primary}
        />
      </View>
    </ScrollView>
  );
};

ProfileScreen.navigationOptions = {
  headerTitle: 'Create Profile'
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
});

export default ProfileScreen;
