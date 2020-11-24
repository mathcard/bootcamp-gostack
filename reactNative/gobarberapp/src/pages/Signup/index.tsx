import React, {useRef} from 'react';
import { Image, KeyboardAvoidingView, ScrollView, Platform, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);




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

    <Form ref={formRef} onSubmit={(data)=>{console.log(data)}} style={{width: '100%'}}>
      <Input
        autoCapitalize="words"
        name="name"
        icon="user"
        placeholder="Nome"
        returnKeyType="next"
        onSubmitEditing={() => {
          emailInputRef.current?.focus();
        }}
      />

      <Input
        ref={emailInputRef}
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        name="email"
        icon="mail"
        placeholder="E-mail"
        returnKeyType="next"
        onSubmitEditing={() => {
          passwordInputRef.current?.focus();
        }}
      />

      <Input
        ref={passwordInputRef}
        secureTextEntry
        textContentType="newPassword" // IOS não peça novo arquivo
        name="password"
        icon="lock"
        placeholder="Senha"
        returnKeyType="send"
        onSubmitEditing={() => formRef.current?.submitForm()}
      />

      <Button onPress={()=> { formRef.current?.submitForm() }}>Entrar</Button>
    </Form>


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
