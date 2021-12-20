import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const HeaderButton = ({ label, ...props }) => {
  return (
    <BaseBtn type="button" {...props}>
      {label}
    </BaseBtn>
  );
};

export const BaseBtn = styled.button`
  background-color: #3d5a5b;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  color: #ffffff;
  padding: 1.05rem;
  transition: background-color 0.5s;
  font-family: "Jua";

  &:hover {
    background-color: #febeb0;
    color: #f7f1ed;
  }
`;

HeaderButton.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};
