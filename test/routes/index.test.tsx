import { render, screen } from "@testing-library/react";
import Index from "~/routes";

describe("Home page", () => {
  it('should have a "hello" text', () => {
    render(<Index />);

    const helloText = screen.getByText(/hello/i);

    expect(helloText).toBeInTheDocument();
  });
});
