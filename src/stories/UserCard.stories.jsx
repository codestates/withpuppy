import React from "react";

import { UserCard } from "./MyPage/UserCard";

export default {
  title: "My Page/Cards",
  component: UserCard,
};

const Template = (args) => <UserCard {...args} />;

export const UserCards = Template.bind({});
UserCards.args = {
  complete: {},
};
