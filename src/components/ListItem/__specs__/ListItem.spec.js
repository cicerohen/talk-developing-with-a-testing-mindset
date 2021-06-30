import React from "react";
import {
  render,
  cleanup,
  queryByTestId,
  queryByText
} from "@testing-library/react";

import ListItem from "../ListItem";

let component;

const props = {
  selectedId: false,
  id: 1,
  value: "VALUE",
  toggleFn: jest.fn(),
  removeFn: jest.fn()
};

describe("<ListItem /> tests", () => {
  beforeEach(() => {
    cleanup();
    component = render(<ListItem {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar corretamente", () => {
    expect(queryByText(component.container, props.value)).toBeTruthy();
  });

  it("deve renderizar corretamente quando não estiver selecionado", async () => {
    component.rerender(<ListItem {...props} isSelected={false} />);
    expect(component.queryByTestId("list-item")).toHaveStyleRule(
      "background-color",
      "#f9f9f9"
    );
  });

  it("deve renderizar corretamente quando estiver selecionado", async () => {
    component.rerender(<ListItem {...props} isSelected={true} />);
    expect(component.queryByTestId("list-item")).toHaveStyleRule(
      "background-color",
      "#eaeaea"
    );
    expect(component.queryByTestId("list-item-toggle-button")).toHaveStyleRule(
      "background-color",
      "#737373"
    );

    expect(component.queryByTestId("list-item-toggle-button")).toHaveStyleRule(
      "border-color",
      "#555454"
    );

    expect(component.queryByTestId("list-item-toggle-button")).toHaveStyleRule(
      "color",
      "#fff"
    );

    expect(component.queryByTestId("list-item-remove-button")).toHaveStyleRule(
      "background-color",
      "#fd4b4b"
    );

    expect(component.queryByTestId("list-item-remove-button")).toHaveStyleRule(
      "border-color",
      "#ff2121"
    );

    expect(component.queryByTestId("list-item-remove-button")).toHaveStyleRule(
      "color",
      "#fff"
    );
  });
});
