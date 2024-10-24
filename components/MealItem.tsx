import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import MealDetails from './MealDetails';

type MealDetailsParams = {
  mealId: number;
};

type RootStackParamList = {
  MealsDetails: MealDetailsParams;
};

type MealItemNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MealsDetails'
>;

interface MealItemProps {
  id: number;
  title: string;
  imageURL: string;
  duration: string;
  affordability: string;
  complexity: string;
}

export default function MealItem({
  id,
  title,
  imageURL,
  affordability,
  complexity,
  duration,
}: MealItemProps) {
  const navigation = useNavigation<MealItemNavigationProp>();

  function pressHandler() {
    navigation.navigate('MealsDetails', {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable onPress={pressHandler} android_ripple={{color: '#ccc'}}>
        <View>
          <Image source={{uri: imageURL}} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          affordability={affordability}
          complexity={complexity}
          duration={duration}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
    color: 'black',
  },
});
