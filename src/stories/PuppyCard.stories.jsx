import React from "react";

import { PuppyCard } from "./MyPage/PuppyCard";

export default {
  title: "My Page/Cards",
  component: PuppyCard,
};

const Template = (args) => <PuppyCard {...args} />;

export const PuppyCards = Template.bind({});
PuppyCards.args = {
  complete: {},
};
