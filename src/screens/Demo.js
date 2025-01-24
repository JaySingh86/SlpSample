import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Svg, { Path } from 'react-native-svg';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

function DashboardScreen() {
  return (
    <View style={styles.screen}>
      <Text>Dashboard</Text>
    </View>
  );
}

function AccountsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Accounts</Text>
    </View>
  );
}

function GeneratorScreen() {
  return (
    <View style={styles.screen}>
      <Text>Generator</Text>
    </View>
  );
}

function VaultScreen() {
  return (
    <View style={styles.screen}>
      <Text>Vault</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Settings</Text>
    </View>
  );
}

// Custom SVG for the curved background
function CustomTabBarBackground() {
  const tabHeight = 82; // Height of the tab bar
  const curveHeight = 38; // Depth of the curve (upwards)

  return (
    <Svg
      width={width}
      height={tabHeight + curveHeight}
      viewBox={`0 0 ${width} ${tabHeight + curveHeight}`}
      style={styles.curve}
    >
      <Path
        d={`
          M 0 ${curveHeight} 
          H ${width * 0.27} 
          C ${width * 0.45} ${curveHeight} ${width * 0.38} 0 ${width * 0.5} 0 
          C ${width * 0.65} 0 ${width * 0.58} ${curveHeight} ${width * 0.72} ${curveHeight} 
          H ${width} 
          V ${ tabHeight +curveHeight} 
          H 0 Z
        `}
        fill="#6F747A"
      />
    </Svg>
  );
}

export default function Demo() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Dashboard') {
              return <Ionicons name="ios-folder" size={size} color={color} />;
            } else if (route.name === 'Accounts') {
              return <Ionicons name="ios-person" size={size} color={color} />;
            } else if (route.name === 'Generator') {
              return (
                <View style={styles.centralIconContainer}>
                  <Ionicons name="ios-shield" size={32} color="white" />
                </View>
              );
            } else if (route.name === 'Vault') {
              return <Ionicons name="ios-lock-closed" size={size} color={color} />;
            } else if (route.name === 'Settings') {
              return <Ionicons name="ios-settings" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: true,
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            height: 70,
            borderTopWidth: 0,
            backgroundColor: 'transparent',
          },
          tabBarBackground: () => <CustomTabBarBackground />,
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Accounts" component={AccountsScreen} />
        <Tab.Screen name="Generator" component={GeneratorScreen} />
        <Tab.Screen name="Vault" component={VaultScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  curve: {
    position: 'absolute',
    bottom: 0,
  },
  centralIconContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#007bff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35, // Ensures proper alignment with the curve
    borderWidth: 4,
    borderColor: '#6F747A',
   top:-8
  },
});
