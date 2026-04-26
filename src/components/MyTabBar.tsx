import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            style={styles.tab}
          >
            <Text style={{ color: isFocused ? 'blue' : 'gray' }}>
              {route.name}
            </Text>
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
};

export default MyTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 110 ,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    borderColor: '#ddd',
  },
  tab: {
    flex: 1,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
    
  },
});