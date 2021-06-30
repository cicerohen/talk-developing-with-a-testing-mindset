import React from "react";
import {
  render,
  cleanup,
  queryByTestId,
  fireEvent
} from "@testing-library/react";

import Button from "../Button";

let component;

const props = {
  onClick: jest.fn(),
  size: "small",
  disabled: false,
  children: <div>text</div>
};

describe("<Button />", () => {
  beforeEach(() => {
    cleanup();
    component = render(<Button {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar corretamente", () => {
    expect(queryByTestId(component.container, "button")).toBeTruthy();
    expect(queryByTestId(component.container, "button")).toContainHTML(
      "<div>text</div>"
    );
  });

  it("deve renderizar corretamente quando estiver habilitado/desabilitado", async () => {
    component.rerender(<Button {...props} disabled={false} />);

    expect(component.queryByTestId("button")).toHaveStyleRule(
      "opacity",
      undefined
    );
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "cursor",
      "pointer"
    );

    component.rerender(<Button {...props} disabled />);

    expect(component.queryByTestId("button")).toHaveStyleRule("opacity", "0.5");
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "cursor",
      "default"
    );
  });

  it("deve renderizar corretamente com o tamanho default", async () => {
    component.rerender(<Button {...props} size="default" />);
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "font-size",
      "0.8rem"
    );
  });

  it("deve renderizpar corretamente com o tamanho small", async () => {
    component.rerender(<Button {...props} size="small" />);
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "font-size",
      "0.6rem"
    );
  });

  it("deve renderizar corretamente com o tamanho large", async () => {
    component.rerender(<Button {...props} size="large" />);
    expect(component.queryByTestId("button")).toHaveStyleRule(
      "font-size",
      "1rem"
    );
  });

  it("deve executar onClick quando o botão for clicado", () => {
    fireEvent.click(queryByTestId(component.container, "button"));
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it("não deve executar onClick quando o botão for do tipo button e estiver desabilitado", () => {
    component.rerender(<Button {...props} tag="button" disabled={true} />);
    fireEvent.click(queryByTestId(component.container, "button"));
    expect(props.onClick).toHaveBeenCalledTimes(0);
  });
});
