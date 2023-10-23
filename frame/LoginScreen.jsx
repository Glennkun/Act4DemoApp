import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Switch,
  Modal,
  TouchableNativeFeedback,
  StatusBar,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import pic from '../assets/pic3.jpg';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSwitchOn, setSwitchOn] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password') {
      alert('Login successful!');
      navigation.navigate('Home');
    } else {
    
      openWebPage('https://images.pexels.com/photos/14440674/pexels-photo-14440674.jpeg');
    }
  };

  const openWebPage = (url) => {
    Linking.openURL(url)
      .then(() => {
        console.log('Web page opened');
      })
      .catch((err) => {
        console.error('Error opening web page:', err);
      });
  };

  const handleForgotPassword = () => {
  
    alert('Alert');
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Show Alert"
        onPress={handleForgotPassword}
        style={styles.alertButton}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <Text style={styles.title}>Login Screen</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Button title="Login" onPress={handleLogin} />
        <View style={styles.switchContainer}>
          <Text>Remember Me</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isSwitchOn ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setSwitchOn(!isSwitchOn)}
            value={isSwitchOn}
          />
        </View>
        <TouchableNativeFeedback onPress={handleForgotPassword}>
          <View style={styles.forgotPasswordButton}>
            <Text>Forgot Password?</Text>
          </View>
        </TouchableNativeFeedback>
        <Button title="Open Modal" onPress={toggleModal} />
        <Modal animationType="slide" transparent={true} visible={isModalVisible}>
          <View style={styles.modalContainer}>
            <Text>This is a modal</Text>
            <Image source={pic} style={styles.modalImage} />
            <Button title="Close Modal" onPress={toggleModal} />
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotPasswordButton: {
    padding: 10,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalImage: {
    width: 200,
    height: 200,
  },
  alertButton: {
    position: 'absolute',
    top: 10,
  },
});
