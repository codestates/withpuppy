import React from "react";

import { HeaderButton } from "./LandingPage/HeaderButton";

export default {
  title: "Landing Page/Header/Button",
  component: HeaderButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <HeaderButton {...args} />;

export const HeaderLoginBtn = Template.bind({});
HeaderLoginBtn.args = {
  label: "로그인",
};

export const HeaderLogoutBtn = Template.bind({});
HeaderLogoutBtn.args = {
  label: "로그아웃",
};

export const HeaderMypageBtn = Template.bind({});
HeaderMypageBtn.args = {
  label: "마이페이지",
};
