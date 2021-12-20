import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const SearchBar = () => (
  <SearchContainer className="inputForm">
    <Search placeholder="장소 검색"></Search>
    <SearchBtn type="submit">검색</SearchBtn>
  </SearchContainer>
);

export const Search = styled.input`
  width: 200px;
  height: 40px;
  background-color: white;
  color: black;
  border-radius: 4px;
  border: none;
  margin-right: 10px;
  font-family: "Jua";
  &:focus {
    outline: none;
  }
`;

export const SearchBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: #e97676;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: white;
  font-family: "Jua";
`;

export const SearchContainer = styled.form`
  width: 255px;
  height: 50px;
  background-color: #febeb0;
  margin: 10px;
  border-radius: 12px;
  z-index: 1000;
  padding: 1rem;
  position: absolute;
  bottom: 20rem;
  right: 40rem;
  outline-offset: -7px;
  box-shadow: 0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
  border: none;
`;
