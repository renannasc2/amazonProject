import { Tabs } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar backgroundColor={"#fff"} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: 'Conta',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Cart"
          options={{
            title: 'Carrinho',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'cart' : 'cart-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Menu"
          options={{
            title: 'Menu',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'menu' : 'menu-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="login"
          options={{
            title: 'Login',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'log-in' : 'log-in-outline'} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
