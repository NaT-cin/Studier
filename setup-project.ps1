# Studier React Native Project Setup Script
# PowerShell script to create folder structure and placeholder files

Write-Host "Setting up Studier React Native project structure..." -ForegroundColor Cyan

# Create main directories
$directories = @(
    "src/screens/auth",
    "src/screens/search",
    "src/screens/profile",
    "src/screens/tutor",
    "src/components",
    "src/context",
    "src/services",
    "src/utils",
    "src/navigation",
    "src/hooks",
    "assets/images",
    "assets/icons"
)

Write-Host "Creating directories..." -ForegroundColor Yellow
foreach ($dir in $directories) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
    Write-Host "  Created: $dir" -ForegroundColor Green
}

Write-Host "Creating screen files..." -ForegroundColor Yellow

# Create screen files
$screenFiles = @{
    "src/screens/auth/LoginScreen.js" = "LoginScreen"
    "src/screens/auth/RegisterScreen.js" = "RegisterScreen"
    "src/screens/search/HomeScreen.js" = "HomeScreen"
    "src/screens/search/TutorListScreen.js" = "TutorListScreen"
    "src/screens/profile/TutorProfileScreen.js" = "TutorProfileScreen"
    "src/screens/profile/AddReviewScreen.js" = "AddReviewScreen"
    "src/screens/tutor/CreateTutorProfileScreen.js" = "CreateTutorProfileScreen"
}

foreach ($file in $screenFiles.GetEnumerator()) {
    $componentName = $file.Value
    $content = @"
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const $componentName = () => {
  return (
    <View style={styles.container}>
      <Text>$componentName</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default $componentName;
"@
    Set-Content -Path $file.Key -Value $content
    Write-Host "  Created: $($file.Key)" -ForegroundColor Green
}

Write-Host "Creating navigation file..." -ForegroundColor Yellow

# Create AppNavigator.js
$navigatorContent = @'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import screens
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import HomeScreen from '../screens/search/HomeScreen';
import TutorListScreen from '../screens/search/TutorListScreen';
import TutorProfileScreen from '../screens/profile/TutorProfileScreen';
import AddReviewScreen from '../screens/profile/AddReviewScreen';
import CreateTutorProfileScreen from '../screens/tutor/CreateTutorProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TutorList" component={TutorListScreen} />
        <Stack.Screen name="TutorProfile" component={TutorProfileScreen} />
        <Stack.Screen name="AddReview" component={AddReviewScreen} />
        <Stack.Screen name="CreateTutorProfile" component={CreateTutorProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
'@

Set-Content -Path "src/navigation/AppNavigator.js" -Value $navigatorContent
Write-Host "  Created: src/navigation/AppNavigator.js" -ForegroundColor Green

Write-Host "Creating context files..." -ForegroundColor Yellow

# Create AuthContext.js
$authContextContent = @'
import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, user: null, isAuthenticated: false };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthContextProvider');
  }
  return context;
};
'@

Set-Content -Path "src/context/AuthContext.js" -Value $authContextContent
Write-Host "  Created: src/context/AuthContext.js" -ForegroundColor Green

# Create SearchContext.js
$searchContextContent = @'
import React, { createContext, useContext, useReducer } from 'react';

const SearchContext = createContext();

const initialState = {
  searchQuery: '',
  selectedSubject: null,
  tutors: [],
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_SELECTED_SUBJECT':
      return { ...state, selectedSubject: action.payload };
    case 'SET_TUTORS':
      return { ...state, tutors: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchContextProvider');
  }
  return context;
};
'@

Set-Content -Path "src/context/SearchContext.js" -Value $searchContextContent
Write-Host "  Created: src/context/SearchContext.js" -ForegroundColor Green

Write-Host "Creating Firebase service..." -ForegroundColor Yellow

# Create firebase.js
$firebaseContent = @'
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
'@

Set-Content -Path "src/services/firebase.js" -Value $firebaseContent
Write-Host "  Created: src/services/firebase.js" -ForegroundColor Green

Write-Host "Creating utils file..." -ForegroundColor Yellow

# Create constants.js
$constantsContent = @'
// App Constants
export const COLORS = {
  primary: '#6200EE',
  primaryVariant: '#3700B3',
  secondary: '#03DAC6',
  error: '#B00020',
  background: '#FFFFFF',
  surface: '#FFFFFF',
  onPrimary: '#FFFFFF',
  onSecondary: '#000000',
  onBackground: '#000000',
  onSurface: '#000000',
  onError: '#FFFFFF',
};

export const SUBJECTS = [
  'Calculus',
  'Physics',
  'General Math',
  'Chemistry',
  'Biology',
  'Computer Science',
  'English',
  'History',
];

export const SOCIAL_PLATFORMS = {
  LINE: 'line',
  INSTAGRAM: 'instagram',
};
'@

Set-Content -Path "src/utils/constants.js" -Value $constantsContent
Write-Host "  Created: src/utils/constants.js" -ForegroundColor Green

Write-Host "Creating App.js..." -ForegroundColor Yellow

# Create App.js
$appContent = @'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthContextProvider } from './src/context/AuthContext';
import { SearchContextProvider } from './src/context/SearchContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <AuthContextProvider>
          <SearchContextProvider>
            <AppNavigator />
            <StatusBar style="auto" />
          </SearchContextProvider>
        </AuthContextProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
'@

Set-Content -Path "App.js" -Value $appContent
Write-Host "  Created: App.js" -ForegroundColor Green

Write-Host "Creating .gitignore..." -ForegroundColor Yellow

# Create .gitignore
$gitignoreContent = @'
# OSX
.DS_Store

# Xcode
build/
*.pbxuser
!default.pbxuser
*.mode1v3
!default.mode1v3
*.mode2v3
!default.mode2v3
*.perspectivev3
!default.perspectivev3
xcuserdata
*.xccheckout
*.moved-aside
DerivedData
*.hmap
*.ipa
*.xcuserstate
project.xcworkspace

# Android/IntelliJ
build/
.idea
.gradle
local.properties
*.iml
*.hprof
.cxx/
*.keystore
!debug.keystore

# Node
node_modules/
npm-debug.log
yarn-error.log

# Expo
.expo/
.expo-shared/
dist/
web-build/

# Bundle artifacts
*.jsbundle

# CocoaPods
/ios/Pods/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Temporary files
*.log
*.tmp
*.temp

# VSCode
.vscode/

# Jest
coverage/
'@

Set-Content -Path ".gitignore" -Value $gitignoreContent
Write-Host "  Created: .gitignore" -ForegroundColor Green

Write-Host ""
Write-Host "Project structure created successfully!" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Run: npm install" -ForegroundColor White
Write-Host "  2. Install dependencies:" -ForegroundColor White
Write-Host "     npm install expo react-navigation/native react-navigation/native-stack" -ForegroundColor Gray
Write-Host "     npm install react-navigation/bottom-tabs react-native-paper firebase" -ForegroundColor Gray
Write-Host "     npm install @react-native-async-storage/async-storage" -ForegroundColor Gray
Write-Host "  3. Configure Firebase credentials in src/services/firebase.js" -ForegroundColor White
Write-Host "  4. Run: npx expo start" -ForegroundColor White
Write-Host ""
Write-Host "Happy coding!" -ForegroundColor Green
