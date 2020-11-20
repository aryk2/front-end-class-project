import React from "react";
import { render } from "@testing-library/react";
import StockPage from "./StockPage";

describe("StockPage", () => {
  it("should render the StockPage component", () => {
    const props = {} as any;
    const { container } = render(<StockPage stock={"IBM"} />);
    expect(container).toBeTruthy();
  });
});
