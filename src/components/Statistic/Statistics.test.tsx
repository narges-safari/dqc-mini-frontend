import { render, screen } from "@testing-library/react";
import Statistic from "./Statistic";

describe("<Statistic />", () => {
  it("should render without crashing", () => {
    const { container } = render(<Statistic name="Name" detail="Detail" />);
    expect(container).toBeInTheDocument();
  });

  it("should render name", () => {
    render(<Statistic name="Name" detail="Detail" />);
    expect(screen.getByText("Name")).toBeInTheDocument();
  });

  it("should render detail", () => {
    render(<Statistic name="Name" detail="Detail" />);
    expect(screen.getByText("Detail")).toBeInTheDocument();
  });

  it("should render percentage", () => {
    render(<Statistic name="Name" detail="Detail" percentage={50} />);
    expect(screen.getByText("50%")).toBeInTheDocument();
  });
});
