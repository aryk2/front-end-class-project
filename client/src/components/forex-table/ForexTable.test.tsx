import React from "react";
import { render } from "@testing-library/react";
import ForexTable from ".";

describe("ForexTable", () => {
  it("should render the ForexTable component", () => {
    const props = {} as any;
    const { container } = render(
      <ForexTable toCurrencyShort={"GBP"} fromCurrencyShort={"USD"} />
    );
    expect(container).toBeTruthy();
  });
});
