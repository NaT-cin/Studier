import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Text, Title } from 'react-native-paper';

/**
 * @param {Object} props
 * @param {import('@react-navigation/native').NavigationProp<any>} props.navigation
 */
const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = () => {
    // In a real app, you would create account here
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Create Account</Title>
      <Text style={styles.subtitle}>Join Studier to find tutors</Text>
      
      <View style={styles.form}>
        <TextInput
          label="Full Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
          mode="outlined"
        />
        
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          mode="outlined"
        />
        
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          mode="outlined"
        />
        
        <Button 
          mode="contained" 
          onPress={handleRegister}
          style={styles.button}
        >
          Register
        </Button>
        
        <Button 
          mode="text" 
          onPress={() => navigation.goBack()}
          style={styles.button}
        >
          Already have an account? Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
    textAlign: 'center',
    color: '#6200EE',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    color: '#666',
  },
  form: {
    width: '100%',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginVertical: 8,
  },
});

export default RegisterScreen;
