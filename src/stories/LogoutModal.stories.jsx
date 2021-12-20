import React from "react";

import { LogoutModal } from "./LandingPage/LogoutModal";

export default {
  title: "Landing Page/Modal",
  component: LogoutModal,
};

const Template = (args) => <LogoutModal {...args} />;

export const logoutModal = Template.bind({});
logoutModal.args = {};
