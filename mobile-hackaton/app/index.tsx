import Navbar from '@/components/NavBar';
import React from 'react';
import { View } from 'react-native';


export default function App(){

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Navbar></Navbar>
    </View>
  );
};
