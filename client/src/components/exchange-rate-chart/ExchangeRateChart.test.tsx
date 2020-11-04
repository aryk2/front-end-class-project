import React from "react";
import { render } from "@testing-library/react";
import ExchangeRateChart from "./ExchangeRateChart";
import fetch from "jest-fetch-mock";

describe("ExchangeRateChart", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it("should render the ExchangeRateChart component", () => {
    fetch.mockResponseOnce({} as any);

    const props = {} as any;
    const { container } = render(
      <ExchangeRateChart CAD={3} GBP={1} EUR={1} KWD={2} />
    );
    expect(true).toBeTruthy();
  });
});
