import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  SectionList,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RegistrationScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isAdditionalInfoVisible, setAdditionalInfoVisible] = useState(false);

  const toggleAdditionalInfo = () => {
    setAdditionalInfoVisible(!isAdditionalInfoVisible);
  };

  const handleRegistration = () => {
    if (email && password) {
      setIsRegistering(true);
      const newUser = { email, password };
      setRegisteredUsers([...registeredUsers, newUser]);

      setTimeout(() => {
        setIsRegistering(false);
        alert('Registration successful!');
        navigation.navigate('Login');
      }, 2000);
    } else {
      alert('Please enter a valid email and password.');
    }
  };

  
  const flatListData = [
    { key: 'Item 1' },
    { key: 'Item 2' },
    { key: 'Item 3' },
    { key: 'Item 4' },
    { key: 'Item 5' },
  ];

  
  const sectionData = [
    {
      title: 'Section 1',
      data: ['Item A', 'Item B', 'Item C'],
    },
    {
      title: 'Section 2',
      data: ['Item X', 'Item Y', 'Item Z'],
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
          <View style={styles.additionalInfo}>
            <Button
              title={isAdditionalInfoVisible ? 'Hide Additional Info' : 'Show Additional Info'}
              onPress={toggleAdditionalInfo}
            />
            {isAdditionalInfoVisible && (
              <View>
                <Text>Additional Information:</Text>
                
                <TextInput style={styles.input} placeholder="Additional Input 1" />
                <TextInput style={styles.input} placeholder="Additional Input 2" />
                <Button title="Additional Action" onPress={() => { }} />
              </View>
            )}
          </View>

          <Text style={styles.title}>Registration Screen</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <Button title="Register" onPress={handleRegistration} />

          {isRegistering && <ActivityIndicator size="large" color="#0000ff" />}

          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {
          
            }}
          >
            <Text>Touchable Component</Text>
          </TouchableOpacity>

        
          <SectionList
            sections={sectionData}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <Text style={styles.sectionItem}>{item}</Text>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
          />

        
          <FlatList
            data={flatListData}
            renderItem={({ item }) => (
              <Text style={styles.flatListItem}>{item.key}</Text>
            )}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  additionalInfo: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  touchableOpacity: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  sectionHeader: {
    fontSize: 20,
    backgroundColor: 'lightgray',
    padding: 5,
  },
  sectionItem: {
    padding: 10,
  },
  flatListItem: {
    padding: 10,
  },
});
