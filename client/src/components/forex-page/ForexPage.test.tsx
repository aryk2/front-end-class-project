import React from "react";
import { render } from "@testing-library/react";
import ForexPage from "./ForexPage";

describe("ForexPage", () => {
  it("should render the ForexPage component", () => {
    const { container } = render(<ForexPage {...{} as any} />);
    expect(container).toBeTruthy();
  });
});
