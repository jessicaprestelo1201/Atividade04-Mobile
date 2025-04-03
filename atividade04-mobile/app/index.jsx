//Parte da Alexandra
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <Pressable style={styles.button} onPress={() => router.push('/login')}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => router.push('/about')}>
        <Text style={styles.buttonText}>Sobre</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => router.push('/termos')}>
        <Text style={styles.buttonText}>Termos</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#E8B3E4',
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Index;