import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("<Info />", () => {
  it("should render without crashing", () => {
    const { container } = render(<Info title="" description="" />);
    expect(container).toBeInTheDocument();
  });

  it("should render title", () => {
    render(<Info title="Title" description="" />);
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("should render description", () => {
    render(<Info title="" description="Description" />);
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("should render cars", () => {
    render(
      <Info
        title=""
        description=""
        cars={[
          { name: "Car 1", percentage: 50, disable: false },
          { name: "Car 2", percentage: 50, disable: false },
        ]}
      />
    );
    expect(screen.getByText("Car 1")).toBeInTheDocument();
    expect(screen.getByText("Car 2")).toBeInTheDocument();
  });

  it("should render unique values", () => {
    render(<Info title="" description="" uniqueValues={10} />);
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("should render cars with disable", () => {
    render(
      <Info
        title="Car1"
        description="Description"
        cars={[
          { name: "Car 1", percentage: 50, disable: true },
          { name: "Car 2", percentage: 50, disable: false },
        ]}
      />
    );
    expect(screen.getByText("Car 1")).toHaveStyle("color: gray");
  });

  it("should render cars with percentage", () => {
    render(
      <Info
        title="Car1"
        description="Description"
        cars={[{ name: "Car 1", percentage: 50, disable: false }]}
      />
    );
    expect(screen.getByText("50%")).toHaveStyle("color: blue");
  });
});
