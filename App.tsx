import { Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Search from './src/screens/Search';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import MyTabBar from './src/components/MyTabBar';
import { BlurView } from '@react-native-community/blur';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            // tabBar={(props) => <MyTabBar {...props} />}
            screenOptions={{
                animation: 'shift',
                // transitionSpec: {
                //     animation: 'timing',
                //     config: {
                //         duration: 150,
                //         easing: Easing.inOut(Easing.ease),
                //     },
                // },
                // sceneStyleInterpolator: ({ current }) => ({
                //     sceneStyle: {
                //         opacity: current.progress.interpolate({
                //             inputRange: [-1, 0, 1],
                //             outputRange: [0, 1, 0],
                //         }),
                //     },
                // }),
                tabBarActiveTintColor: '#3981fe',
                tabBarInactiveTintColor: '#828282',
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 700,
                    marginTop: 0.5

                },
                tabBarStyle: {
                    height: 120,
                    paddingTop: 8,
                },
                tabBarLabelPosition: 'below-icon',
                tabBarBadge: 2,
                tabBarBadgeStyle: {
                    fontSize: 10,
                    backgroundColor: '#003fdf'
                },

                // tabBarItemStyle: {
                //     backgroundColor: 'red',
                //     borderWidth: 2,
                //     borderColor: 'green'
                // },
                // tabBarBackground: () => (
                //     <BlurView blurType="light" blurAmount={20} style={StyleSheet.absoluteFill} />
                // ),

            }
            }
            backBehavior='none'
        >
            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MatIcon name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name='Profile' component={Profile} options={{
                tabBarIcon: ({ size, color }) => (
                    <FeatherIcon name="user" size={size} color={color} />
                )
            }} />
            <Tab.Screen name='Search' component={Search} options={{
                tabBarIcon: ({ size, color }) => (
                    <FeatherIcon name="search" size={size} color={color} />
                )
            }} />
        </Tab.Navigator >
    )
}

const App = () => {
    return (

        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})