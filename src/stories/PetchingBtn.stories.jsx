import React from "react";
import { PetchingBtn } from "./MyPage/PetchingBtn";

export default {
  title: "My Page/Button",
  component: PetchingBtn,
};

const Template = (args) => <PetchingBtn {...args} />;

export const petchingBtn = Template.bind({});
petchingBtn.args = {};
