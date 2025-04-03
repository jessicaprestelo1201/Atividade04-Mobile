import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const Termos = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Termos de Uso</Text>

        <Text style={styles.paragraph}>
          Estes são os termos de uso do aplicativo. Ao usar o app, você concorda com os seguintes termos e condições:
        </Text>

        <Text style={styles.subtitle}>1. Aceitação dos Termos</Text>
        <Text style={styles.paragraph}>
          Ao acessar ou usar o aplicativo, você concorda em cumprir estes termos de uso, bem como quaisquer modificações subsequentes.
        </Text>

        <Text style={styles.subtitle}>2. Uso do Aplicativo</Text>
        <Text style={styles.paragraph}>
          O aplicativo é destinado ao uso pessoal e não comercial. O usuário não deve usar o app de maneira que possa danificar, desativar, sobrecarregar ou prejudicar o serviço.
        </Text>

        <Text style={styles.subtitle}>3. Propriedade Intelectual</Text>
        <Text style={styles.paragraph}>
          Todos os conteúdos do aplicativo, incluindo textos, gráficos, logos, imagens e vídeos, são de propriedade do desenvolvedor ou dos licenciantes, e estão protegidos por leis de direitos autorais.
        </Text>

        <Text style={styles.subtitle}>4. Privacidade</Text>
        <Text style={styles.paragraph}>
          O aplicativo coleta dados pessoais de acordo com nossa política de privacidade, que pode ser consultada a qualquer momento no aplicativo.
        </Text>

        <Text style={styles.subtitle}>5. Modificações dos Termos</Text>
        <Text style={styles.paragraph}>
          Reservamos o direito de modificar ou atualizar os termos de uso a qualquer momento. Mudanças significativas serão informadas no aplicativo.
        </Text>

        <Text style={styles.subtitle}>6. Limitação de Responsabilidade</Text>
        <Text style={styles.paragraph}>
          O aplicativo não se responsabiliza por quaisquer danos diretos, indiretos ou acidentais decorrentes do uso do serviço.
        </Text>

        <Text style={styles.subtitle}>7. Cancelamento de Conta</Text>
        <Text style={styles.paragraph}>
          Você pode desativar sua conta a qualquer momento através das configurações do aplicativo. A desativação da conta pode resultar na perda de acesso a determinados recursos.
        </Text>

        <Text style={styles.subtitle}>8. Contato</Text>
        <Text style={styles.paragraph}>
          Se você tiver alguma dúvida sobre os termos de uso, entre em contato conosco através do e-mail: suporte@app.com.
        </Text>
      </ScrollView>

     
      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 24,
  },
  button: {
    padding: 10,
    backgroundColor: '#E8B3E4',
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Termos;
