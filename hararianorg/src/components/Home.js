import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, Linking } from 'react-native';
import Footer from './Footer';

export default function HomePage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Welcome to the Hararian Organization</Text>
      </View>
      <Image source={{ uri: 'https://storage.googleapis.com/islamic_lessons_images/Nabi%20Mawlud%20Invite' }} style={styles.bannerImage} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.sectionContent}>
          Established in 2000, the Hararian Organization of Australia is a not-for-profit community organisation formed by dedicated members who came together out of sincere concern for their community.
          Our primary goal is to support the integration of migrant families, and our wider community members into Australian society whilst upholding traditions, and cultural identities.
          We focus on social cohesion and integration through education programs, and social activities that run throughout the year for diverse ages.
        </Text>
        <Text style={styles.sectionContent}>
          Our organisation spreads moderation and Islamic Creed based on the teachings of Prophet Muhammad, peace be upon him, and the consensus of the four Islamic schools of Ahlus-Sunnah.
          We call for unity and peace, through promoting moderation, and warnings of extremism.
        </Text>
        <Text style={styles.sectionContent}> Over the years, the Hararian Organization has continued to provide a multitude of services providing a culturally accepted understanding for the Hararian Australian community.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Events</Text>
        <Text style={styles.sectionContent}>Join us for various cultural and educational events throughout the year. Check our calendar for more details!</Text>
        <Button title="View Events" onPress={() => Linking.openURL('https://static1.squarespace.com/static/5e86c88fd734b52f6ab2646f/t/6537ac87d1c83230659f3c92/1698147463384/2023+Youth+Planner_Oct.pdf')} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Get Involved</Text>
        <Text style={styles.sectionContent}>We thrive on volunteer support! Learn how you can contribute to our initiatives.</Text>
        <Button title="Volunteer" onPress={() => { /* navigation logic */ }} />
      </View>
      <Footer> </Footer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  section: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    marginBottom: 20,
    // textAlign: 'center'
  }
});
