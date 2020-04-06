# expo-todo-app

Simple To-Do app for educational purposes built using React Native and Expo.

## Preview
In Expo App: https://exp.host/@elena.kim/expo-todo-app  
Snack (without persistance, imported manually): https://snack.expo.io/@elena.kim/e04920

## How To Run locally
1. Follow expo-cli [installation guide](https://docs.expo.io/versions/v36.0.0/get-started/installation/)
2. In the command line run:
```
cd expo-todo-app
npm install
expo start
```

## Libraries
Component library: [react-native-paper](https://github.com/callstack/react-native-paper)  
Navigation: [react-navigation](https://reactnavigation.org/)  
State management: [redux](https://redux.js.org/), [react-redux](https://react-redux.js.org/)  
Persistence: AsyncStorage with [redux-persist](https://github.com/rt2zz/redux-persist)  

## Main Features
1. Create / Rename / Delete list of todos
2. Create / Toggle / Delete / Edit todo
3. Settings  
    a. Confirm before deleting a task  
    b. Dark theme