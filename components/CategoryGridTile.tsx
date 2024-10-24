import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface CategoryGridTileProps {
  title: string;
  color: string;
  onPress: any;
}

export default function CategoryGridTile({
  title,
  color,
  onPress,
}: CategoryGridTileProps) {
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={styles.button}
        onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',

    // shadowColor: 'black',
    // shadowOpacity: 0.25,
    // shadowOffset: {width: 0, height: 2},
    // shadowRadius: 8,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
});
