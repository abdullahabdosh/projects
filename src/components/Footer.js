import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Footer() {
  return (

    <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Hararian Organization. All Rights Reserved.</Text>
      </View>

  );
}


const styles = StyleSheet.create({
    footer: {
      padding: 20,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
    },
    footerText: {
      fontSize: 14,
      color: '#888',
    },
  });