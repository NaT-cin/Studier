import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Button, Text, Title, Chip } from 'react-native-paper';

/**
 * @param {Object} props
 * @param {import('@react-navigation/native').NavigationProp<any>} props.navigation
 * @param {Object} props.route
 * @param {{subject: string}} props.route.params
 */
const TutorListScreen = ({ navigation, route }) => {
  const { subject } = route.params;

  // Mock tutor data
  const mockTutors = [
    {
      id: '1',
      name: 'Sarah Johnson',
      bio: 'Mathematics enthusiast with 3 years of tutoring experience',
      rate: 25,
      rating: 4.8,
      reviewCount: 24,
    },
    {
      id: '2',
      name: 'Michael Chen',
      bio: 'PhD student specializing in advanced mathematics',
      rate: 30,
      rating: 4.9,
      reviewCount: 18,
    },
    {
      id: '3',
      name: 'Emma Williams',
      bio: 'Passionate about making complex concepts simple',
      rate: 20,
      rating: 4.7,
      reviewCount: 31,
    },
  ];

  const renderTutor = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.name}</Title>
        <Text style={styles.bio}>{item.bio}</Text>
        <View style={styles.infoRow}>
          <Chip icon="star" style={styles.chip}>
            {item.rating} ({item.reviewCount} reviews)
          </Chip>
          <Text style={styles.rate}>${item.rate}/hr</Text>
        </View>
      </Card.Content>
      <Card.Actions>
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('TutorProfile', { tutorId: item.id })}
        >
          View Profile
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title style={styles.headerTitle}>{subject} Tutors</Title>
        <Text style={styles.headerSubtitle}>{mockTutors.length} tutors available</Text>
      </View>
      
      <FlatList
        data={mockTutors}
        renderItem={renderTutor}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  bio: {
    marginVertical: 8,
    color: '#666',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  chip: {
    backgroundColor: '#FFF3E0',
  },
  rate: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200EE',
  },
});

export default TutorListScreen;
