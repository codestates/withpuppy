import React from "react";
import { EditBtn } from "./MyPage/EditBtn";

export default {
  title: "My Page/Button",
  component: EditBtn,
};

const Template = (args) => <EditBtn {...args} />;

export const editBtn = Template.bind({});
editBtn.args = {};
