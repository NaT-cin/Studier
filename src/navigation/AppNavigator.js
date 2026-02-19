import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import HomeScreen from '../screens/search/HomeScreen';
import TutorListScreen from '../screens/search/TutorListScreen';
import TutorProfileScreen from '../screens/profile/TutorProfileScreen';
import AddReviewScreen from '../screens/profile/AddReviewScreen';
import CreateTutorProfileScreen from '../screens/tutor/CreateTutorProfileScreen';

/**
 * @typedef {Object} RootStackParamList
 * @property {undefined} Login
 * @property {undefined} Register
 * @property {undefined} Home
 * @property {{subject: string}} TutorList
 * @property {{tutorId: string}} TutorProfile
 * @property {undefined} AddReview
 * @property {undefined} CreateTutorProfile
 */

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6200EE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Studier Login' }}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ title: 'Register' }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Search Tutors' }}
        />
        <Stack.Screen 
          name="TutorList" 
          component={TutorListScreen} 
          options={{ title: 'Available Tutors' }}
        />
        <Stack.Screen 
          name="TutorProfile" 
          component={TutorProfileScreen} 
          options={{ title: 'Tutor Profile' }}
        />
        <Stack.Screen 
          name="AddReview" 
          component={AddReviewScreen} 
          options={{ title: 'Add Review' }}
        />
        <Stack.Screen 
          name="CreateTutorProfile" 
          component={CreateTutorProfileScreen} 
          options={{ title: 'Create Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
