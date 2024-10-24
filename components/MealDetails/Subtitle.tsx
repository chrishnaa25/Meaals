import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface SubtitleProps {
  title: string;
}

export default function Subtitle({title}: SubtitleProps) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginVertical: 4,
    padding: 6,
    marginHorizontal: 12,
    borderBlockColor: '#e2b497',
  },
});
