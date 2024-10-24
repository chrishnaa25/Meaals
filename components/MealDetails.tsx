import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';

interface MealDetailsProps {
  duration: string;
  affordability: string;
  complexity: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function MealDetails({
  duration,
  affordability,
  complexity,
  style,
  textStyle,
}: MealDetailsProps) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: 'black',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
});
