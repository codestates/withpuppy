import React from "react";
import { MapPage } from "./MapPage/MapPage";

export default {
  title: "Map Page/Page",
  component: MapPage,
};

const Template = (args) => <MapPage {...args} />;

export const mapPage = Template.bind({});
mapPage.args = {};
