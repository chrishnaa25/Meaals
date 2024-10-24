import React from 'react';
import CategoryScreens from './screens/CategoryScreens';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MealDetailScreen from './screens/MealDetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavouritesScreen from './screens/FavouritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <GestureHandlerRootView>
      <Drawer.Navigator>
        <Drawer.Screen name="Categories" component={CategoryScreens} />
        <Drawer.Screen name="Favourites" component={FavouritesScreen} />
      </Drawer.Navigator>
    </GestureHandlerRootView>
  );
}

function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <StatusBar barStyle="light-content" animated={true} />
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
          }}>
          <Stack.Screen name="MealsCategories" component={DrawerNavigator} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealsDetails" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
