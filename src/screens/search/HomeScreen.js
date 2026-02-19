import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Card, Text, Title } from 'react-native-paper';
import { SUBJECTS } from '../../utils/constants';

/**
 * @param {Object} props
 * @param {import('@react-navigation/native').NavigationProp<any>} props.navigation
 */
const HomeScreen = ({ navigation }) => {
  const handleSubjectPress = (subject) => {
    navigation.navigate('TutorList', { subject });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Title style={styles.title}>Find Your Perfect Tutor</Title>
        <Text style={styles.subtitle}>Select a subject to get started</Text>
        
        <View style={styles.subjectGrid}>
          {SUBJECTS.map((subject) => (
            <Card key={subject} style={styles.card}>
              <Card.Content>
                <Text style={styles.cardTitle}>{subject}</Text>
              </Card.Content>
              <Card.Actions>
                <Button 
                  mode="contained" 
                  onPress={() => handleSubjectPress(subject)}
                  style={styles.cardButton}
                >
                  Find Tutors
                </Button>
              </Card.Actions>
            </Card>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    color: '#666',
  },
  subjectGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  cardButton: {
    flex: 1,
  },
});

export default HomeScreen;
