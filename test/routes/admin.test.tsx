import { render, screen } from "@testing-library/react";
import Admin from "~/routes/admin";

describe("Admin Page", () => {
  it('has a "hello admin" text', () => {
    render(<Admin />);

    const helloText = screen.getByText(/adicionar novo lugar/i);

    expect(helloText).toBeVisible();
  });
});
