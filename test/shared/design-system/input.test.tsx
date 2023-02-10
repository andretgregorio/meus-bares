import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "~/shared/design-system/input";

describe("Input", () => {
  function renderInput({
    label = "Minha Label",
    name = "custom-name",
    value = "",
    placeholder = "",
  }: Partial<InputProps>) {
    return render(
      <form>
        <Input
          label={label}
          name={name}
          value={value}
          placeholder={placeholder}
        />
      </form>
    );
  }

  describe("First render", () => {
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

    it("should render the placeholder text", () => {
      const initialValue = "Initial Value";
      const name = "my-custom-name-2";
      const placeholder = "Type me!";

      renderInput({ value: initialValue, name, placeholder });

      const input = screen.getByRole("textbox");

      expect(input).toHaveAttribute("placeholder", placeholder);
    });
  });

  describe("User interactions", () => {
    it("should change the input value when user types a different value", async () => {
      userEvent.setup();

      const initialValue = "Initial Value";
      const newValue = "New value typed by user";
      const name = "my-custom-name-2";

      renderInput({ value: initialValue, name });

      const input = screen.getByRole("textbox");

      expect(input).toHaveValue(initialValue);

      await userEvent.clear(input);

      await userEvent.type(input, newValue);

      expect(input).toHaveValue(newValue);
    });
  });
});
