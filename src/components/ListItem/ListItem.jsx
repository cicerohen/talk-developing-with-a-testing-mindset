import React from "react";
import styled from "styled-components";

import Button from "../Button";

const Wrapper = styled.li`
  list-style: none;
  padding: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #dbdbdb;
  display: flex;
  margin-top: -1px;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.isSelected && "#eaeaea") || "#f9f9f9"};
`;

const ToggleButton = styled(Button)`
  ${props =>
    props.isSelected &&
    `
    background-color: #737373;
    border-color: #555454;
    color: #fff;
  `}
`;

const RemoveButton = styled(Button)`
  background-color: #fd4b4b;
  border-color: #ff2121;
  color: #fff;
`;

const ListItem = ({ id, value, isSelected = false, toggleFn, removeFn }) => {
  const onToggle = React.useCallback(() => {
    if (toggleFn) {
      toggleFn(id);
    }
  }, [id, toggleFn]);

  const onRemove = React.useCallback(() => {
    if (removeFn) {
      removeFn(id);
    }
  }, [id, removeFn]);

  return (
    <Wrapper
      isSelected={isSelected}
      data-testid="list-item"
      data-selected={isSelected}
    >
      {value}
      <div>
        <ToggleButton
          size="small"
          isSelected={isSelected}
          onClick={onToggle}
          data-testid="list-item-toggle-button"
        >
          {(isSelected && "Selecionado") || "Selecionar"}
        </ToggleButton>
        <RemoveButton
          size="small"
          onClick={onRemove}
          data-testid="list-item-remove-button"
        >
          Remover
        </RemoveButton>
      </div>
    </Wrapper>
  );
};

export default React.memo(ListItem);
