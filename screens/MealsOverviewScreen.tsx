import React, {useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import {FlatList} from 'react-native-gesture-handler';

export default function MealsOverviewScreen({route, navigation}: any) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId,
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData: any) {
    const item = itemData.item;
    return (
      <MealItem
        id={item.id}
        title={item.title}
        imageURL={item.imageUrl}
        affordability={item.affordability}
        complexity={item.complexity}
        duration={item.duration}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
