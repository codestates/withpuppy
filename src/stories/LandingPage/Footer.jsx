import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import FooterImg from "../assets/FooterImg.png";

export const Footer = () => (
  <>
    <Box>
      <Container>
        <FooterImage src={FooterImg} />
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
                <FontAwesomeIcon icon={faGithub} size="3x" inverse />
              </BottomLogo>
            </Github>
          </Column>
        </Row>
      </Container>
    </Box>
  </>
);

export const Box = styled.div`
  padding: 40px 40px;
  background-color: #3d5a5b;
  /* position: relative; */
  bottom: 0;
  width: 96.4%;
  height: 30%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  justify-content: space-between;
  grid-gap: 20px;
`;

export const Logo = styled.div`
  color: white;
  margin-left: 40px;
  margin-right: 40px;
  text-decoration: none;
  font-family: "Jua";
  font-size: 30px;
`;

export const BottomLogo = styled.a`
  color: white;
  text-decoration: none;
`;

export const Github = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 40px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FooterImage = styled.img`
  width: 50px;
  height: 60px;
  margin-bottom: 20px;
  cursor: pointer;
`;
