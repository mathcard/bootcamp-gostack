import React from 'react';
import { Image, KeyboardAvoidingView, ScrollView, Platform, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';


import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    enabled
  >
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
  <Container>
    <Image source={logoImg} />
    <View>
      <Title>Faça seu Logon</Title>
    </View>

    <Input name="name" icon="user" placeholder="Nome" />

    <Input name="email" icon="mail" placeholder="E-mail" />

    <Input name="password" icon="lock" placeholder="Senha" />

    <Button onPress={()=> { console.log('foi') }}>Entrar</Button>

      <BackToSignIn onPress={() => { navigation.goBack() }}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInText>Voltar para Login</BackToSignInText>
      </BackToSignIn>
     </Container>
    </ScrollView>
  </KeyboardAvoidingView>

  );
};

export default SignUp;
