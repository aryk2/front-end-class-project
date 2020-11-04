import React from "react";
import { render } from "@testing-library/react";
import ForexTable from ".";

describe("ForexTable", () => {
  it("should render the ForexTable component", () => {
    const props = {} as any;
    const { container } = render(
      <ForexTable
        toLong={"British Pound Sterling"}
        toShort={"GBP"}
        fromShort={"USD"}
        fromLong={"United States Dollar"}
        bid={"0.64"}
        ask={"0.67"}
        exchangeRate={"0.656"}
      />
    );
    expect(container).toBeTruthy();
  });
});
