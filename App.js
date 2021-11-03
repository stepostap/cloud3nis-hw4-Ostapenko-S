import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notes from './Views/Notes';
import NoteEdit from './Views/NoteEdit';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NOTES"
          component={Notes}
          options={{ 
            title: 'Notes',
          }}
        />
        <Stack.Screen 
          name="Create"
          component={NoteEdit}
          options={{title: 'Create'}}
        />
        <Stack.Screen 
          name="Edit"
          component={NoteEdit}
          options={{title: 'Edit'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}