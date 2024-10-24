import React, {useLayoutEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MealDetails from '../components/MealDetails';
import {MEALS} from '../data/dummy-data';
import MealProps from '../data/types';
import Subtitle from '../components/MealDetails/Subtitle';
import List from '../components/MealDetails/List';
import {ScrollView} from 'react-native-gesture-handler';
// import IconButton from '../components/IconButton';

export default function MealDetailScreen({route, navigation}: any) {
  const mealId = route.params.mealId;

  const selectedMeal: MealProps = MEALS.find(meal => meal.id === mealId);

  // function pressHandler() {
  //   console.log('Pressed!!');
  // }

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => {
  //       return <IconButton onPress={pressHandler} />;
  //     },
  //   });
  // }, [navigation]);

  return (
    <ScrollView style={styles.root}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle title="Ingredients" />
          <List data={selectedMeal.ingredients} />
          <Subtitle title="Steps" />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
