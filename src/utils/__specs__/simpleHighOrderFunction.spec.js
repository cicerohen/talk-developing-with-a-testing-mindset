import sinon from "sinon";
import sinonChai from "sinon-chai";
import chai, { expect } from "chai";

chai.use(sinonChai);

import simpleHighOrderFunction from "../simpleHighOrderFunction";

describe("simpleHighOrderFunction() test", () => {
  it("deve retornar corretamente com simpleFunction()", () => {
    const arg = 20;
    const simpleFunctionStub = sinon.stub().returns(arg);
    const result = simpleHighOrderFunction(simpleFunctionStub, arg);
    expect(result).to.be.equal(arg);
  });

  it("deve retornar corretamente sem simpleFunction()", () => {
    const result = simpleHighOrderFunction();
    expect(result).to.be.undefined;
  });

  it("deve executar simpleFunction() corretamente", () => {
    const simpleFunctionSpy = sinon.spy();
    const arg = 20;
    simpleHighOrderFunction(simpleFunctionSpy, arg);
    expect(simpleFunctionSpy).to.have.been.calledOnceWith(arg);
  });
});
