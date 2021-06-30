import { expect } from "chai";

import simpleFunction from "../simpleFunction";

describe("simpleFunction() test", () => {
  it("deve retornar corretamente ao ser executada com parametros", () => {
    const param = 10;
    expect(simpleFunction(param)).to.be.equal(param);
  });

  it("deve retornar corretamente ao ser executada sem parametros", () => {
    expect(simpleFunction()).to.be.undefined;
  });
});
