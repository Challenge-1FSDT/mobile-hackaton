import CabecalhoPrivado from '@/components/cabecalho-privado/CabecalhoPrivado';
import PostCard from '@/components/card/Card';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';

export default function Aulas(){

  return (
    <>
      <CabecalhoPrivado></CabecalhoPrivado>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style={{width: '100%'}}>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
        </ScrollView>
      </View>
    </>
  );
};
