import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./global.css";
import { Header } from "../LandingPage/Header";
import Sample from "../assets/지도 샘플.png";
import { DefaultImage } from "../MapPage/DefaultImage";
import { SearchBar } from "../MapPage/SearchBar";

export const MapPage = () => (
  <>
    <MapMain>
      <Header />
      <SearchBar />
      <DefaultImage />
      <img src={Sample} width="1900" height="1000"></img>
    </MapMain>
  </>
);

export const MapMain = styled.main`
  width: 2000px;
  height: 1300px;
  transform: translateY(6rem);
  background-color: white;
  &.mapMain {
    padding: 2rem;
    transform: translateY(0);
  }
`;

export const Div = styled.div`
  display: flex;
`;
