import React from "react";
import { render } from "@testing-library/react";
import ForexTable from "./ForexTable";

describe("ForexTable", () => {
  it("should render the ForexTable component", () => {
    const props = {favoriteFunctions: {} as any} as any;
    const { container } = render(
      <ForexTable {...props} toCurrencyShort={"GBP"} fromCurrencyShort={"USD"} />
    );
    expect(container).toBeTruthy();
  });
});
