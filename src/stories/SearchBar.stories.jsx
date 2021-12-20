import React from "react";
import { SearchBar } from "./MapPage/SearchBar";

export default {
  title: "Map Page/SearchBar",
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const searchBar = Template.bind({});
searchBar.args = {};
