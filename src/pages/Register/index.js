import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

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
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import InputMask from '../../components/InputMask';

export default function Register() {
  const [phone, setPhone] = useState('');
  const [processing, setProcessing] = useState(false);

  // const [color, setColor] = useState('#fff');
  const isDesktop = useMediaQuery({ query: '(min-device-width: 900px)' });

  // useEffect(() => {
  //   if (isDesktop) setColor('#f0f');
  //   else setColor('#ff0');
  // }, [isDesktop]);

  const handleSubmit = data => {
    setProcessing(true);

    fetch('https://api.iampro.app/register', {
      method: 'post',
      body: JSON.stringify(data)
    }).then(response => {
      setProcessing(false);
      console.log(response);
    }).catch(err => {
      setProcessing(false);
      // notify.show(message, type, timeout, color)
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
        <Form onSubmit={handleSubmit}>
          {isDesktop === true ? (
            <InputContainer>
              <Input value="Ramires Gomes" name="name" title="Nome Completo" placeholder="Informe seu nome" />
              <SmallSelect
                  name="gender"
                  title="Gênero"
                  placeholder="Selecione..."
              />

              <Input
                value="26/10/1992"
                name="birth"
                title="Data de Nascimento"
                placeholder="DD/MM/AAAA"
                style={{ width: 160 }}
              />
            </InputContainer>
          ) : (
            <>
              <InputContainer>
                <Input value="Ramires Gomes" name="name" title="Nome Completo" placeholder="Informe seu nome" />
              </InputContainer>

              <InputContainer
                style={{
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
                  value="26/10/1992"
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
            <Input value="ramires.gb@gmail.com" name="email" title="Email" placeholder="Informe seu email" />
            <InputMask
              value="991491885"
              title="Celular MG"
              name="cellphone"
              mask="9999 9999"
              alwaysShowMask
              onChange={e => setPhone(e.target.value)}
              // value={phone}
            />
          </InputContainer>
          <InputContainer
            style={isDesktop === true ? { display: 'flex' } : { height: 140 }}
          >
            <Input value="Programador" name="occupation" title="Profissão" placeholder="Informe sua profissão" />
            <Input
                value="Desenvolvimento web"
              name="operation"
              title="Qual a área de cobertura que atua em MG?"
              placeholder="Informe sua área de cobertura"
            />
          </InputContainer>
          <InputContainer style={{ height: 177 }}>
            <TextArea value="..... . . . . .. ." name="services" title="Serviços que Oferece" full={isDesktop} />
          </InputContainer>
          <button id="registerWeb" disabled={processing} type="submit">
            {processing ? "Enviando..." : "Cadastre-se Gratuitamente"}
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
