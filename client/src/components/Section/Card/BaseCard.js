import React from 'react';
import { CardSection } from 'components/Section';

function BaseCard({ children, className }) {
  return <CardSection className={className}>{children}</CardSection>;
}

export default BaseCard;
