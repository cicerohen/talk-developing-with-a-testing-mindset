import React from "react";
import styled from "styled-components";

import ListItem from "../ListItem";

const Wrapper = styled.ul`
  padding: 0;
  margin: 0;
`;

const List = ({ items = [], selectedId, toggleFn, removeFn }) => {
  return (
    <Wrapper data-testid="list">
      {items.map(item => (
        <ListItem
          key={item.id}
          id={item.id}
          value={item.value}
          isSelected={item.id === selectedId}
          toggleFn={toggleFn}
          removeFn={removeFn}
        />
      ))}
    </Wrapper>
  );
};

export default List;
