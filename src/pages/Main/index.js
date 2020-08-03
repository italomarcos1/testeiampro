import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import {
  Container,
  Header,
  Logo,
  BannerContainer,
  Content,
  Info,
  Services,
  Highlights,
  RegisterButton,
  EasyToHire,
  EasyToHireInfo,
  Bubbles,
} from './styles';

import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo@2x.png';
import cards from '../../assets/cards@2x.png';
import smartphone from '../../assets/smartphone.png';
import smartphone2 from '../../assets/app-1.png';
import like from '../../assets/like.svg';
import location from '../../assets/location.svg';
import growth from '../../assets/growth.svg';

import profissional1 from '../../assets/objetivoDoAplicativo.png';
import profissional2 from '../../assets/profissional.png';
import profissional3 from '../../assets/clientes.png';

import babysitters from '../../assets/babysitters.png';
import barber from '../../assets/barber.png';
import cabeleireiros from '../../assets/cabeleireiros.png';
import cleaner from '../../assets/cleaner.png';
import dj from '../../assets/dj.png';
import eletricista from '../../assets/eletricista.png';
import encanador from '../../assets/encanador.png';
import fotografos from '../../assets/fotografos.png';
import medico from '../../assets/medico.png';
import passeioComCao from '../../assets/passeioComCao.png';

export default function Main() {
  const isDesktop = useMediaQuery({ query: '(min-device-width: 900px)' });

  const [infoSubtext, setInfoSubtext] = useState(
    `Tenha os seus serviços a venda no maior aplicativo de Minas Gerais, selecione a área geográfica que deseja atuar \n e os serviços que oferece. Deixe a divulgação conosco!`
  );

  const [likeText, setLikeText] = useState(
    `Participe do maior aplicativo de \nserviços de MG, cadastre-se em 2 \nminutos.`
  );

  const [locationText, setLocationText] = useState(
    `Selecione a área geográfica que \n deseja atuar e os serviços que \n oferece.`
  );

  const [growthText, setGrowthText] = useState(
    `Nós divulgamos e vendemos o seu \nserviço em um APP com milhares de \nclientes.`
  );

  useEffect(() => {
    if (!isDesktop) {
      setInfoSubtext(
        `Tenha os seus serviços a venda no maior aplicativo de \n Minas Gerais, selecione a área geográfica que deseja \n atuar e os serviços que oferece.`
      );
      setLikeText(
        `Participe do maior aplicativo de serviços de \n MG, cadastre-se em 2 minutos.`
      );
      setLocationText();
      setGrowthText();
    }
  }, []);

  return (
    <Container>
      <Header>
        <Link>
          <img src={logo} alt="Logo" srcSet={`${logo} 1x, ${logo2} 2x`} />
        </Link>
      </Header>

      <BannerContainer>
        <Content>
          <strong>Você é um profissional?</strong>
          <Link to="/register">Cadastre-se Gratuitamente</Link>
        </Content>
      </BannerContainer>

      <RegisterButton to="/register" id="participe">
        Cadastre-se Gratuitamente
      </RegisterButton>
      <Info>
        <h2>Participe do maior aplicativo de MG</h2>
        <h4>{infoSubtext}</h4>
        <strong>Deixe a divulgação conosco!</strong>
      </Info>
      <div id="phone">
        <img src={smartphone} alt="Phone" />
      </div>
      <Services>
        <ul>
          <li>
            <img src={like} alt="like" />
            <strong>Cadastre-se Gratuitamente</strong>
            <h2>
              Participe do maior aplicativo de serviços de <br />
              MG, cadastre-se em 2 <br /> minutos.
            </h2>
          </li>
          <li>
            <img src={location} alt="like" />
            <strong>Seleciona a Localização</strong>
            <h2>
              Selecione a área geográfica <br /> que deseja atuar e os serviços
              que <br /> oferece.
            </h2>
          </li>
          <li>
            <img src={growth} alt="like" />
            <strong>Agora é só Faturar</strong>
            <h2>
              Nós divulgamos e vendemos o seu <br /> serviço em um APP com
              milhares de
              <br /> clientes.
            </h2>
          </li>
        </ul>
      </Services>
      <RegisterButton to="/register" id="participe">
        Cadastre-se Gratuitamente
      </RegisterButton>
      <Highlights>
        <strong>Destaque o seu serviço</strong>
        <h2>
          Tenha o seu serviço em destaque na página inicial do aplicativo com o
          valor da sua hora/serviço e promoções pontuais além da distância para
          o cliente.
        </h2>
        <div>
          <img src={cards} alt="cards" />
        </div>
        <Link to="/register" id="registerWebHighlight">
          Cadastre-se Gratuitamente
        </Link>
      </Highlights>
      <EasyToHire>
        <div id="phonebottom">
          <img src={smartphone2} alt="phone" />
        </div>
        <EasyToHireInfo>
          <strong>Um aplicativo fácil de contratar</strong>
          <h3>
            Imagine ter no seu smartphone todos os profissionais a sua <br />
            disposição, valores por hora ou por serviço.
          </h3>
          <ul>
            <li>
              <img src={profissional1} alt="profissional" />
              <div>
                <h2>Objetivo do Aplicativo</h2>
                <h4>
                  Facilitamos a vida das pessoas com um aplicativo onde reúne
                  vários profissionais para contratação imediata por hora ou por
                  serviço
                </h4>
              </div>
            </li>
            <li>
              <img src={profissional2} alt="profissional" />
              <div>
                <h2>Profissional</h2>
                <h4>
                  Ajudamo-lo a aumentar <br />
                  exponencialmente o seu volume de <br />
                  negócios com comissão de 20%
                </h4>
              </div>
            </li>
            <li>
              <img src={profissional3} alt="profissional" />
              <div>
                <h2>Clientes</h2>
                <h4>
                  Contrate e pague o profissional que deseja de forma simples e
                  rápida
                </h4>
              </div>
            </li>
          </ul>
        </EasyToHireInfo>
      </EasyToHire>
      <Bubbles>
        {isDesktop === true ? (
          <>
            <img
              src={cabeleireiros}
              alt=""
              style={{ width: 192, height: 192 }}
            />
            <img src={encanador} alt="" style={{ width: 313, height: 313 }} />
            <img src={babysitters} alt="" style={{ width: 192, height: 192 }} />
            <img src={cleaner} alt="" style={{ width: 295, height: 295 }} />
            <img src={eletricista} alt="" style={{ width: 180, height: 180 }} />
            <img src={fotografos} alt="" style={{ width: 133, height: 133 }} />
            <img src={barber} alt="" style={{ width: 229, height: 229 }} />
            <img src={dj} alt="" style={{ width: 168, height: 168 }} />
            <img
              src={passeioComCao}
              alt=""
              style={{ width: 195, height: 195 }}
            />
            <img src={medico} alt="" style={{ width: 169, height: 169 }} />
          </>
        ) : (
          <>
            <img
              src={passeioComCao}
              alt=""
              style={{ width: 135, height: 135 }}
            />
            <img src={barber} alt="" style={{ width: 121, height: 121 }} />
            <img src={cleaner} alt="" style={{ width: 185, height: 185 }} />
            <img src={fotografos} alt="" style={{ width: 133, height: 133 }} />
            <img src={dj} alt="" style={{ width: 133, height: 133 }} />
            <img
              src={cabeleireiros}
              alt=""
              style={{ width: 108, height: 108 }}
            />
            <img src={babysitters} alt="" style={{ width: 115, height: 115 }} />
          </>
        )}
      </Bubbles>
      <RegisterButton to="/register" id="participe">
        Cadastre-se Gratuitamente
      </RegisterButton>
    </Container>
  );
}
