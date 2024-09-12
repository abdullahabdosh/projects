/* import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

export default function Home() {
  const [entries, setEntries] = useState([
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' }
  ]);

  // Example function to update entries
  const updateEntries = () => {
    const newTitles = ['Updated Slide 1', 'Updated Slide 2', 'Updated Slide 3'];
    const newEntries = newTitles.map(title => ({ title }));
    setEntries(newEntries);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Testing 123</Text>
      <Carousel
        loop
        width={Dimensions.get('window').width}
        height={200} // Set height according to your design
        autoPlay={true}
        data={entries}
        scrollAnimationDuration={1000}
        renderItem={renderItem}  // Use the standalone renderItem function
      />
      <Button title="Update Slides" onPress={updateEntries} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  slide: {
    backgroundColor: '#9DD6EB',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    color: '#000000'
  },
});
*/