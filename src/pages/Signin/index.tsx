import React from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Signin: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="new account">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default Signin;
