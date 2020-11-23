import React, { useCallback, useRef } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, Platform, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { Container, Title, ForgotPassword, ForgotPasswordText,
   CreateAccountButton, CreateAccountButtonText } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      /*try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          console.log(errors);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais.',
        );
      }*/
    },
    [],
  );

  return (
  <>
    <KeyboardAvoidingView style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>

    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}>

    <Container>
      <Image source={logoImg} />
      <View>
        <Title>Faça seu Logon</Title>
      </View>

      <Form ref={formRef} onSubmit={handleSignIn}>
        <Input name="email" icon="mail" placeholder="E-mail" />

        <Input name="password" icon="lock" placeholder="Senha" />

        <Button onPress={()=> { formRef.current?.submitForm() }}>Entrar</Button>
      </Form>
      <ForgotPassword onPress={() => {}}>
        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
      </ForgotPassword>
      </Container>
    </ScrollView>
  </KeyboardAvoidingView>

  <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
    <Icon name="log-in" size={20} color="#ff9000" />
    <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
  </CreateAccountButton>
  </>
  );
};

export default SignIn;
