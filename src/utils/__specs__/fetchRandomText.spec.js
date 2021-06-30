import "core-js/stable";
import "regenerator-runtime/runtime";

import jsdom from "mocha-jsdom";
import fetchMock from "fetch-mock";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import chai, { expect } from "chai";

chai.use(sinonChai);

jsdom({
  url: "http://localhost"
});

import { RANDOM_TEXT_URL } from "../config";
import fetchRandomText from "../fetchRandomText";

const body = ["text"];

describe("fetchRandomText() test", () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  it("deve efetuar a request com a url correta", async () => {
    fetchMock.get(RANDOM_TEXT_URL, JSON.stringify(body), {
      delay: 200
    });
    await fetchRandomText();
    expect(fetchMock.called(RANDOM_TEXT_URL)).to.be.true;
  });

  it("deve retornar com sucesso", async () => {
    fetchMock.get(RANDOM_TEXT_URL, JSON.stringify(body), {
      delay: 200
    });
    const result = await fetchRandomText();
    expect(result).to.deep.equal(body);
  });

  it("deve retornar com erro", async () => {
    const message = "Error";
    fetchMock.mock(RANDOM_TEXT_URL, {
      throws: new Error(message)
    });
    try {
      await fetchRandomText();
    } catch (err) {
      expect(err.message).to.be.equal(message);
    }
  });
});
