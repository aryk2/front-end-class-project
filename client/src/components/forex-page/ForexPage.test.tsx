import React from "react";
import { render } from "@testing-library/react";
import ForexPage from ".";

describe("ForexPage", () => {
  it("should render the ForexPage component", () => {
    const { container } = render(<ForexPage from={"USD"} to={"GBP"} />);
    expect(container).toBeTruthy();
  });
});
