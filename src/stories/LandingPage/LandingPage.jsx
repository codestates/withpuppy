import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./global.css";
import { Header } from "./Header";
import Image from "../assets/Group 160.png";
import { Footer } from "./Footer";
import { About } from "./About";
import { Contact } from "./Contact";
import { Services } from "./Services";

export const LandingPage = () => (
  <>
    <Header />
    <About />
    <Contact />
    <Services />
    <Footer />
  </>
);
