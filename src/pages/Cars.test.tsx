import { render, renderHook } from "@testing-library/react";
import Cars from "./Cars";
import { useCars } from "./Car.biz";

describe("<Cars />", () => {
  it("should render without creashing", () => {
    const { container } = render(<Cars />);
    expect(container).toBeInTheDocument();
  });

  it("should takes a name and return a color", () => {
    const { result } = renderHook(() => useCars());
    const color = result.current.findColorHandler("Valid");
    expect(color).toBe("#00c58d");
  });

  it("should find the name with highest persantage", () => {
    const { result } = renderHook(() => useCars());
    const maxPercentageName = result.current.findMaxPercentageName([
      { name: "Valid", detail: "7385", percentage: 100 },
      { name: "Mismatched", detail: "0", percentage: 0 },
      { name: "Missing", detail: "0", percentage: 0 },
      { name: "Unique", detail: "42" },
      { name: "Most Common", detail: "FORD", percentage: 9 },
    ]);
    expect(maxPercentageName).toBe("Valid");
  });
});
