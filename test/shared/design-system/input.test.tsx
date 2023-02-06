import { render, screen } from "@testing-library/react";
import Input from "~/shared/design-system/input";

describe("Input", () => {
  function renderInput({
    label = "Minha Label",
    name = "custom-name",
    value = "",
  }: Partial<InputProps>) {
    return render(
      <form>
        <Input label={label} name={name} value={value} />
      </form>
    );
  }

  describe("Props", () => {
    it("should render the input with the label", () => {
      const label = "Minha label";
      renderInput({ label });

      const input = screen.getByLabelText(label);

      expect(input).toBeVisible();
    });

    it("should render the input with the initial value", () => {
      const initialValue = "Initial Value";
      const name = "my-custom-name-2";

      renderInput({ value: initialValue, name });

      const input = screen.getByRole("textbox");

      expect(input).toHaveValue(initialValue);
    });
  });
});
