import React from "react";

import { SignupModal } from "./LandingPage/SignupModal";

export default {
  title: "Landing Page/Modal",
  component: SignupModal,
};

const Template = (args) => <SignupModal {...args} />;

export const signupModal = Template.bind({});
signupModal.args = {};
