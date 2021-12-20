import React from "react";
import { LandingPage } from "./LandingPage/LandingPage";

export default {
  title: "Landing Page/Page",
  component: LandingPage,
};

const Template = (args) => <LandingPage {...args} />;

export const landingPage = Template.bind({});
landingPage.args = {};
