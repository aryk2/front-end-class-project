import React from "react";
import { render } from "@testing-library/react";
import Candlechart from ".";
const testDates = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
];
const testOpen = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
];
const testClose = [
  10,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
  10,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
  10,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
  10,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
  10,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
  10,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
  10,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
  10,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
  10,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
];
const testHigh = [
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
];
const testLow = [
  0.1,
  0.2,
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  0.11,
  0.1,
  0.2,
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  0.11,
  0.1,
  0.2,
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  0.11,
  0.1,
  0.2,
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  0.11,
  0.1,
  0.2,
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  0.11,
  0.1,
  0.2,
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  0.11,
  0.1,
  0.2,
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  0.11,
  0.1,
  0.2,
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  0.11,
  0.1,
  0.2,
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  0.11,
];
describe("Candlechart", () => {
  it("should render the Candlechart component", () => {
    const props = {} as any;
    const { container } = render(
      <Candlechart
        open={testOpen}
        close={testClose}
        dates={testDates}
        high={testHigh}
        low={testLow}
      />
    );
    expect(container).toBeTruthy();
  });
});
