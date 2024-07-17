import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image, TouchableOpacity, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer';

export default class Zoom extends Component {
  state = {
    lessons: [],
    loading: true
  };

  componentDidMount() {
    this.fetchLessons();
  }

  fetchLessons = async () => {
    try {
      const response = await fetch('http://192.168.1.16:3000/lessons');
      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }
      const lessons = await response.json();
      this.setState({ lessons, loading: false });
    } catch (error) {
      console.error('Error fetching lessons:', error.message);
      this.setState({ loading: false });
    }
  };
  

  render() {
    const { lessons, loading } = this.state;

    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Available Lessons</Text>
        <ScrollView>
          {lessons.map((lesson, index) => (
            <View key={index} style={styles.lesson}>
              <Text style={styles.title}>{lesson.title}</Text>
              <Image source={{ uri: lesson.image }} style={styles.image} />
              <Text style={styles.description}>{lesson.description}</Text>
              <Text style={styles.dateTime}>Time: {lesson.date_time}</Text>
              <Text style={styles.zoomLink}>Zoom Link: {lesson.zoom_link}</Text>
              <Text style={styles.meetingID}>{lesson.meeting_id}</Text>
              <View style={styles.socialPlatforms}>
                {/* facebook icon with the link*/}
                <TouchableOpacity onPress={() => Linking.openURL(lesson.social_platforms.facebook)}>
                <FontAwesomeIcon icon={faMugSaucer} size={30} color="#3b5998" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL(lesson.social_platforms.instagram)}>
              <FontAwesomeIcon icon={faMugSaucer} size={30} color="#3b5998" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL(lesson.social_platforms.tiktok)}>
                <FontAwesomeIcon icon={faMugSaucer} size={30} color="#3b5998" />
              </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  lesson: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 30,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  dateTime: {
    fontSize: 14,
    marginBottom: 5,
  },
  zoomLink: {
    fontSize: 14,
    marginBottom: 5,
  },
  meetingID: {
    fontSize: 14,
    marginBottom: 5,
  },
  socialPlatforms: {
    marginTop: 10,
  },
  socialPlatform: {
    fontSize: 14,
    marginBottom: 10,
  },
  platform_icons: {
    size: 30,
    colour: "#3b5998"
  }
});
