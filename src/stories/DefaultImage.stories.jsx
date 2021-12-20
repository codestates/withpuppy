import React from "react";
import { DefaultImage } from "./MapPage/DefaultImage";

export default {
  title: "Map Page/DefaultImage",
  component: DefaultImage,
};

const Template = (args) => <DefaultImage {...args} />;

export const defaultImage = Template.bind({});
defaultImage.args = {};
