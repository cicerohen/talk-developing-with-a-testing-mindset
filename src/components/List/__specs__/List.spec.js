import React from "react";
import {
  render,
  cleanup,
  queryByTestId,
  queryAllByTestId,
  fireEvent
} from "@testing-library/react";

import List from "../List";

let component;

const itemsMock = [
  {
    id: 1,
    value: "ITEM 1"
  },
  {
    id: 2,
    value: "ITEM 2"
  },
  {
    id: 3,
    value: "ITEM 3"
  }
];

const props = {
  items: [],
  selectedId: null,
  toggleFn: jest.fn(),
  removeFn: jest.fn()
};

describe("<List /> tests", () => {
  beforeEach(() => {
    cleanup();
    component = render(<List {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar corretamente", () => {
    expect(queryByTestId(component.container, "list")).toBeTruthy();
  });

  it("deve renderizar corretamente sem itens", () => {
    expect(queryAllByTestId(component.container, "list-item")).toHaveLength(0);
  });

  it("deve renderizar corretamente com itens", () => {
    component.rerender(<List {...props} items={itemsMock} />);
    expect(queryAllByTestId(component.container, "list-item")).toHaveLength(3);
  });

  it("deve renderizar corretamente sem item selecionado", () => {
    component.rerender(
      <List {...props} items={itemsMock} selectedId={undefined} />
    );
    expect(
      component.container.querySelectorAll("[data-selected='true']")
    ).toHaveLength(0);
  });

  it("deve renderizar corretamente com item selecionado", () => {
    component.rerender(
      <List {...props} items={itemsMock} selectedId={itemsMock[0].id} />
    );
    expect(
      component.container.querySelectorAll("[data-selected='true']")
    ).toHaveLength(1);
  });

  it("deve executar toggleFn quando um item for selecionado", () => {
    component.rerender(<List {...props} items={[itemsMock[0]]} />);

    expect(props.toggleFn).not.toHaveBeenCalled();

    fireEvent.click(
      queryByTestId(component.container, "list-item-toggle-button")
    );

    expect(props.toggleFn).toHaveBeenNthCalledWith(1, itemsMock[0].id);
  });

  it("deve executar removeFn quando um item for removido", () => {
    component.rerender(<List {...props} items={[itemsMock[0]]} />);

    expect(props.removeFn).not.toHaveBeenCalled();

    fireEvent.click(
      queryByTestId(component.container, "list-item-remove-button")
    );

    expect(props.removeFn).toHaveBeenNthCalledWith(1, itemsMock[0].id);
  });
});
