import React, { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { notify } from 'react-notify-toast';

import {
  Container,
  Header,
  Footer,
  Logo,
  Background,
  Info,
  FormContainer,
  Form,
  InputContainer,
  FinishButton,
} from './styles';

import logo from '../../assets/logo.png';
import smartphone from '../../assets/app-1.png';
import Input from '../../components/Input';
import SmallSelect from '../../components/SmallSelect';
import TextArea from '../../components/TextArea';
import InputMask from '../../components/InputMask';

export default function Register() {
  const [phone, setPhone] = useState('');
  const [processing, setProcessing] = useState(false);

  const isDesktop = useMediaQuery({ query: '(min-device-width: 900px)' });

  const formRef = useRef(null);

  const handleSubmit = (data, { reset }) => {
    setProcessing(true);

    fetch('https://api.iampro.app/register', {
      method: 'post',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(({ meta }) => {
        setProcessing(false);
        notify.show(meta.message, meta.status);

        reset();
      })
      .catch(() => {
        setProcessing(false);
        notify.show(
          'Ocorreu um erro no processamento dos seus dados.',
          'error'
        );
      });
  };

  return (
    <Container>
      <Header>
        <Background />

        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
      </Header>

      <Info>
        <h2>Cadastro gratuito para o aplicativo</h2>

        <h4>
          Abaixo digite as informações necessárias para conhecer o que você pode
          oferecer em serviços profissionais.
          <br /> Participe do maior Aplicativo de Minas Gerais.
        </h4>
      </Info>

      <FormContainer>
        <div id="phone">
          <img src={smartphone} alt="phone" />
        </div>

        <Form onSubmit={handleSubmit} ref={formRef}>
          {isDesktop === true ? (
            <InputContainer>
              <Input
                name="name"
                title="Nome Completo"
                placeholder="Informe seu nome"
              />

              <SmallSelect
                name="gender"
                title="Gênero"
                placeholder="Selecione..."
              />

              <Input
                name="birth"
                title="Data de Nascimento"
                placeholder="DD/MM/AAAA"
                style={{ width: 160 }}
              />
            </InputContainer>
          ) : (
            <>
              <InputContainer>
                <Input
                  name="name"
                  title="Nome Completo"
                  placeholder="Informe seu nome"
                />
              </InputContainer>

              <InputContainer
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  width: '100%',
                  height: 60,
                  justifyContent: 'center',
                }}
              >
                <SmallSelect
                  name="gender"
                  title="Gênero"
                  placeholder="Selecione..."
                  style={{
                    display: 'block',
                    marginRight: 10,
                  }}
                />

                <Input
                  name="birth"
                  title="Data de Nascimento"
                  placeholder="DD/MM/AAAA"
                  style={{
                    width: 160,
                    marginLeft: 10,
                  }}
                />
              </InputContainer>
            </>
          )}

          <InputContainer
            style={isDesktop === true ? { display: 'flex' } : { height: 140 }}
          >
            <Input name="email" title="Email" placeholder="Informe seu email" />

            <InputMask
              title="Celular MG"
              name="cellphone"
              mask="9999 9999"
              alwaysShowMask
              onChange={e => setPhone(e.target.value)}
              value={phone}
              style={{ marginTop: 40 }}
            />
          </InputContainer>

          <InputContainer
            style={isDesktop === true ? { display: 'flex' } : { height: 140 }}
          >
            <Input
              name="occupation"
              title="Profissão"
              placeholder="Informe sua profissão"
            />

            <Input
              name="operation"
              title="Qual a área de cobertura que atua em MG?"
              placeholder="Informe sua área de cobertura"
              style={{ marginTop: 40 }}
            />
          </InputContainer>

          <InputContainer style={{ height: 177 }}>
            <TextArea
              name="services"
              title="Serviços que Oferece"
              full={isDesktop}
            />
          </InputContainer>

          <button id="registerWeb" disabled={processing} type="submit">
            {processing ? 'Enviando...' : 'Cadastre-se Gratuitamente'}
          </button>
        </Form>
      </FormContainer>

      <FinishButton id="finishbutton">Cadastre-se Gratuitamente</FinishButton>

      <Footer>
        <div id="background" />
      </Footer>
    </Container>
  );
}

