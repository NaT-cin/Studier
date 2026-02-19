import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Title } from 'react-native-paper';

/**
 * @param {Object} props
 * @param {import('@react-navigation/native').NavigationProp<any>} props.navigation
 */
const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // In a real app, you would authenticate here
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Welcome to Studier</Title>
      <Text style={styles.subtitle}>Connect with peer tutors</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          mode="contained" 
          onPress={handleLogin}
          style={styles.button}
        >
          Login
        </Button>
        
        <Button 
          mode="outlined" 
          onPress={() => navigation.navigate('Register')}
          style={styles.button}
        >
          Register
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
    color: '#6200EE',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    color: '#666',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  button: {
    marginVertical: 8,
  },
});

export default LoginScreen;
