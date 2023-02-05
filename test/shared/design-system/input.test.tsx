import { render, screen } from "@testing-library/react";
import Input from "~/shared/design-system/input";

describe("Input", () => {
  describe("Props", () => {
    it("should render the label", () => {
      render(
        <form>
          <Input label="Minha label" name="custom-name" />
        </form>
      );

      const input = screen.getByLabelText(/minha label/i);

      expect(input).toBeVisible();
    });
  });
});
