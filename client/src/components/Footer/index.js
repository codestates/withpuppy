import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Box,
  Logo,
  Container,
  Github,
  BottomLogo,
  Column,
  Row,
  FooterImage,
} from './FooterStyle';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import FooterImg from 'assets/img/Footer/FooterImg.png';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', //auto 넣어도 같은 기능을 한다고 함...
    });
  };

  return (
    <Box>
      <Container>
        <FooterImage src={FooterImg} onClick={scrollToTop} />
        <Row>
          <Column>
            <Row>
              <Logo href="https://github.com/heewonkim-dev">Heewon_Kim</Logo>
              <Logo href="https://github.com/solimleee">Solim_Lee</Logo>
              <Logo href="https://github.com/taesubyun">Taesub_Yun</Logo>
              <Logo href="https://github.com/chltjdrhd777">Ucheol_Choi</Logo>
            </Row>
            <Github>
              <BottomLogo href="https://github.com/codestates/withpuppy">
                <FontAwesomeIcon icon={faGithub} size="2x" inverse />
              </BottomLogo>
            </Github>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}

export default Footer;
