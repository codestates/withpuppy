import React from "react";
import { CustomOverlay } from "./MapPage/CustomOverlay";

export default {
  title: "Map Page/CustomOverlay",
  component: CustomOverlay,
};

const Template = (args) => <CustomOverlay {...args} />;

export const customoverlay = Template.bind({});
customoverlay.args = {};
