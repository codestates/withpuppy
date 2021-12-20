import React from "react";
import { CompleteBtn } from "./MyPage/CompleteBtn";

export default {
  title: "My Page/Button",
  component: CompleteBtn,
};

const Template = (args) => <CompleteBtn {...args} />;

export const completeBtn = Template.bind({});
completeBtn.args = {};
