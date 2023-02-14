import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { PropsWithChildren } from "react";
import Admin from "~/routes/admin";

vi.mock("@remix-run/react", () => ({
  Form: ({ children }: PropsWithChildren) => <form>{children}</form>,
}));

describe("Admin Page", () => {
  const renderAdminPage = () => render(<Admin />);

  it('has the title "Adicionar novo lugar" text', () => {
    renderAdminPage();

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent(/adicionar novo lugar/i);
  });

  it("has an input field to add the name of the new place", () => {
    renderAdminPage();

    const nameInput = screen.getByRole("textbox", {
      name: "Nome do lugar para cadastro",
    });

    expect(nameInput).toBeVisible();
  });

  it("has an input field to add the URL of the new place", () => {
    renderAdminPage();

    const urlInput = screen.getByRole("textbox", {
      name: "Endereço do site do bar a ser cadastrado",
    });

    expect(urlInput).toBeVisible();
  });

  it("has an input field to add the categories of the new place", () => {
    renderAdminPage();

    const categoriesInput = screen.getByRole("textbox", {
      name: "Categorias do lugar a ser cadastrado",
    });

    expect(categoriesInput).toBeVisible();
  });

  it("has a submit button", () => {
    renderAdminPage();

    const button = screen.getByRole("button", { name: /salvar/i });

    expect(button).toBeVisible();
  });

  it('has calls the "createNewPlace" use case', async () => {
    const placeName = "Place name";
    const placeUrl = "Places website";
    const placeTags = "beber comer";

    renderAdminPage();

    const nameInput = screen.getByRole("textbox", {
      name: "Nome do lugar para cadastro",
    });
    await userEvent.type(nameInput, placeName);

    const urlInput = screen.getByRole("textbox", {
      name: "Endereço do site do bar a ser cadastrado",
    });
    await userEvent.type(urlInput, placeUrl);

    const categoriesInput = screen.getByRole("textbox", {
      name: "Categorias do lugar a ser cadastrado",
    });
    await userEvent.type(categoriesInput, placeTags);
  });
});
