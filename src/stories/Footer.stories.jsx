import React from "react";

import { Footer } from "./LandingPage/Footer";

export default {
  title: "Landing Page/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const footer = Template.bind({});
footer.args = {};
