// Parte da Jéssica
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const About = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre nosso Jardim Encantado</Text>
      <Text style={styles.text}>
        O Jardim Encantado é o seu espaço digital perfeito para explorar, aprender e comprar flores incríveis para todos os momentos da sua vida. 
        Com uma variedade de flores, arranjos e dicas de cuidados, nosso aplicativo oferece uma experiência única para os amantes da natureza. 
        Descubra o encanto de cada pétala e transforme seu ambiente com a beleza das flores!
      </Text>
      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F8F9',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#E8B3E4',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    padding: 12,
    backgroundColor: '#E8B3E4',
    borderRadius: 8,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default About;
