import React from 'react';
import { View, StyleSheet, ScrollView, Linking } from 'react-native';
import { Card, Button, Text, Title, Avatar, Chip, Divider } from 'react-native-paper';

/**
 * @param {Object} props
 * @param {import('@react-navigation/native').NavigationProp<any>} props.navigation
 * @param {Object} props.route
 * @param {{tutorId: string}} props.route.params
 */
const TutorProfileScreen = ({ navigation, route }) => {
  const { tutorId } = route.params;

  // Mock tutor data (in real app, fetch based on tutorId)
  const tutor = {
    id: tutorId,
    name: 'Sarah Johnson',
    bio: 'Mathematics enthusiast with 3 years of tutoring experience. I specialize in Calculus, Linear Algebra, and Statistics. My teaching style focuses on building strong fundamentals and problem-solving skills.',
    rate: 25,
    rating: 4.8,
    reviewCount: 24,
    subjects: ['Calculus', 'Linear Algebra', 'Statistics'],
    line: 'sarahjohnson',
    instagram: 'sarahjohnson_tutor',
    reviews: [
      { id: '1', student: 'John D.', rating: 5, comment: 'Excellent tutor! Very patient and clear.' },
      { id: '2', student: 'Lisa M.', rating: 4.5, comment: 'Really helped me understand calculus concepts.' },
    ],
  };

  const openLine = () => {
    Linking.openURL(`line://ti/p/${tutor.line}`);
  };

  const openInstagram = () => {
    Linking.openURL(`instagram://user?username=${tutor.instagram}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.profileCard}>
        <Card.Content style={styles.profileHeader}>
          <Avatar.Text size={80} label={tutor.name.split(' ').map(n => n[0]).join('')} />
          <View style={styles.profileInfo}>
            <Title style={styles.name}>{tutor.name}</Title>
            <View style={styles.ratingRow}>
              <Chip icon="star" style={styles.ratingChip}>
                {tutor.rating}
              </Chip>
              <Text style={styles.reviewText}>({tutor.reviewCount} reviews)</Text>
            </View>
            <Text style={styles.rate}>${tutor.rate}/hour</Text>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>About</Title>
          <Text style={styles.bio}>{tutor.bio}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Subjects</Title>
          <View style={styles.subjectContainer}>
            {tutor.subjects.map((subject, index) => (
              <Chip key={index} style={styles.subjectChip}>
                {subject}
              </Chip>
            ))}
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Contact</Title>
          <Text style={styles.contactText}>Connect with this tutor:</Text>
        </Card.Content>
        <Card.Actions>
          <Button 
            mode="contained" 
            icon="message" 
            onPress={openLine}
            style={styles.contactButton}
          >
            Line
          </Button>
          <Button 
            mode="contained" 
            icon="instagram" 
            onPress={openInstagram}
            style={styles.contactButton}
          >
            Instagram
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Reviews</Title>
          {tutor.reviews.map((review) => (
            <View key={review.id} style={styles.review}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewStudent}>{review.student}</Text>
                <Chip icon="star" size={20}>{review.rating}</Chip>
              </View>
              <Text style={styles.reviewComment}>{review.comment}</Text>
              <Divider style={styles.divider} />
            </View>
          ))}
        </Card.Content>
        <Card.Actions>
          <Button 
            mode="outlined" 
            onPress={() => navigation.navigate('AddReview')}
          >
            Write a Review
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileCard: {
    margin: 16,
    marginBottom: 8,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 20,
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  ratingChip: {
    backgroundColor: '#FFF3E0',
    marginRight: 8,
  },
  reviewText: {
    color: '#666',
  },
  rate: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200EE',
    marginTop: 4,
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  bio: {
    marginTop: 8,
    lineHeight: 22,
    color: '#666',
  },
  subjectContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  subjectChip: {
    marginRight: 8,
    marginBottom: 8,
  },
  contactText: {
    marginTop: 8,
    color: '#666',
  },
  contactButton: {
    marginHorizontal: 4,
  },
  review: {
    marginTop: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  reviewStudent: {
    fontWeight: 'bold',
  },
  reviewComment: {
    color: '#666',
    marginTop: 4,
  },
  divider: {
    marginTop: 12,
  },
});

export default TutorProfileScreen;
