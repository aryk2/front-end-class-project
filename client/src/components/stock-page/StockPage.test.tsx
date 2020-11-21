import React from "react";
import { render } from "@testing-library/react";
import StockPage from "./StockPage";

describe("StockPage", () => {
  it("should render the StockPage component", () => {
    const props = {favoriteFunctions: {} as any} as any;
    const { container } = render(<StockPage stock={"IBM"} {...props}/>);
    expect(container).toBeTruthy();
  });
});
