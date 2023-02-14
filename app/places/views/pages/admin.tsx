import { Form } from "@remix-run/react";
import { Container } from "~/shared/design-system/container";
import Input from "~/shared/design-system/input";
import InputGroup from "../components/input-group";

export default function AdminPage() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <Container>
        <h1>Adicionar novo lugar</h1>
        <Form className="mt-4" method="post">
          <InputGroup>
            <Input
              name="name"
              label="Nome do lugar"
              placeholder="Nome do lugar"
              ariaLabel="Nome do lugar para cadastro"
            />
          </InputGroup>
          <InputGroup>
            <Input
              name="website"
              label="Site do lugar"
              placeholder="Site do lugar"
              ariaLabel="Endereço do site do bar a ser cadastrado"
            />
          </InputGroup>
          <InputGroup>
            <Input
              name="tags"
              label="Tags do lugar"
              placeholder="Tags do lugar"
              ariaLabel="Categorias do lugar a ser cadastrado"
            />
          </InputGroup>

          <InputGroup>
            <button type="submit">Salvar</button>
          </InputGroup>
        </Form>
      </Container>
    </main>
  );
}
