import React from "react";
import { Mypage } from "./MyPage/Mypage";

export default {
  title: "My Page/Page",
  component: Mypage,
};

const Template = (args) => <Mypage {...args} />;

export const myPage = Template.bind({});
myPage.args = {};
