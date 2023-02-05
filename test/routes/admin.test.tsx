import { render, screen } from "@testing-library/react";
import Admin from "~/routes/admin";

describe("Admin Page", () => {
  it('has a "hello admin" text', () => {
    render(<Admin />);

    const helloText = screen.getByText(/hello, admin/i);

    expect(helloText).toBeVisible();
  });
});
