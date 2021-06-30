import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const size = ({ size }) => css`
  ${size === "small" && `font-size: 0.6rem;`}
  ${size === "default" && `font-size: 0.8rem;`}
  ${size === "large" && `font-size: 1rem;`}
`;

const Wrapper = styled.button`
  color: #333;
  border-left-width: 1px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-color: #999;
  border-style: solid;
  padding: 1em 1.5em;
  cursor: pointer;
  background-color: #f9f9f9;
  border-radius: 0.2rem;
  display: inline-block;
  text-transform: uppercase;
  margin: 5px;
  ${size}
  ${props =>
    props.disabled &&
    `
    opacity: 0.5;
    cursor: default;
  `}
`;

const Button = React.memo(
  ({ size, disabled, onClick, children, className, ...others }) => (
    <Wrapper
      size={size}
      disabled={disabled}
      onClick={onClick}
      className={className}
      data-testid={others["data-testid"] || "button"}
    >
      {children}
    </Wrapper>
  )
);

Button.defaultProps = {
  disabled: false,
  size: "default"
};

Button.propType = {
  size: PropTypes.oneOf(["small", "default", "large"])
};

export default Button;
