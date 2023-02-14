import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "~/shared/design-system/input";

describe("Input", () => {
  function renderInput({
    label = "Minha Label",
    name = "custom-name",
    placeholder = "",
  }: Partial<InputProps>) {
    return render(
      <form>
        <Input label={label} name={name} placeholder={placeholder} />
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

    it("should render the placeholder text", () => {
      const name = "my-custom-name-2";
      const placeholder = "Type me!";

      renderInput({ name, placeholder });

      const input = screen.getByRole("textbox");

      expect(input).toHaveAttribute("placeholder", placeholder);
    });

    it("should set the input value to whatever the user types", async () => {
      userEvent.setup();

      const newValue = "New value typed by user";
      const name = "my-custom-name-2";

      renderInput({ name });

      const input = screen.getByRole("textbox");

      expect(input).toHaveValue("");

      await userEvent.type(input, newValue);

      expect(input).toHaveValue(newValue);
    });
  });
});
