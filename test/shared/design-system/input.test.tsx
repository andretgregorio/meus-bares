import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "~/shared/design-system/input";

describe("Input", () => {
  function renderInput({
    label = "Minha Label",
    name = "custom-name",
    value = "",
    placeholder = "",
    onChange = (value) => {},
  }: Partial<InputProps>) {
    return render(
      <form>
        <Input
          label={label}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
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

    it("should render the input with the value passed as props", () => {
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

    it("should call the onChange function when user types", async () => {
      userEvent.setup();

      const initialValue = "Initial Value";
      const newValue = "New value typed by user";
      const name = "my-custom-name-2";
      const onChangeFn = vi.fn();

      renderInput({ value: initialValue, name, onChange: onChangeFn });

      const input = screen.getByRole("textbox");

      expect(input).toHaveValue(initialValue);

      await userEvent.clear(input);

      await userEvent.type(input, newValue);

      const cleanInputRemount = 1;
      expect(onChangeFn).toHaveBeenCalledTimes(
        newValue.length + cleanInputRemount
      );
    });
  });
});
