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
