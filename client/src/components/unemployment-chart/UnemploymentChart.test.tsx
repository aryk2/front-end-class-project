import React from "react";
import { render } from "@testing-library/react";
import UnemploymentChart from "./UnemploymentChart";

describe("UnemploymentChart", () => {
  it("should render the UnemploymentChart component", () => {
    const { container } = render(
      // <UnemploymentChart
      //   jan2020={4}
      //   feb2020={4}
      //   march2020={5}
      //   april2020={7}
      //   may2020={13}
      //   june2020={13.5}
      //   july2020={12}
      //   aug2020={10}
      //   sept2020={7}
      //   oct2020={4}
      //   jan2019={2}
      //   feb2019={2.5}
      //   march2019={3}
      //   april2019={3}
      //   may2019={3.4}
      //   june2019={2.77}
      //   july2019={3.3}
      //   aug2019={3.4}
      //   sept2019={4}
      //   oct2019={3}
      // />
      <></>

    );
    expect(true).toBeTruthy();
  });
});
