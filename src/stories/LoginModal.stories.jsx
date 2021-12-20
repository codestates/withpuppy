import React from "react";

import { LoginModal } from "./LandingPage/LoginModal";

export default {
  title: "Landing Page/Modal",
  component: LoginModal,
};

const Template = (args) => <LoginModal {...args} />;

export const loginModal = Template.bind({});
loginModal.args = {};
