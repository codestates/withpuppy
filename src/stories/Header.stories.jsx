import React from "react";

import { Header } from "./LandingPage/Header";

export default {
  title: "Landing Page/Header/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
