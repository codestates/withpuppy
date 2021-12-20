import React from "react";
import { HomeBtn } from "./MyPage/HomeBtn";

export default {
  title: "My Page/Button",
  component: HomeBtn,
};

const Template = (args) => <HomeBtn {...args} />;

export const homeBtn = Template.bind({});
homeBtn.args = {};
