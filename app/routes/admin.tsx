import type { ActionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { createNewPlace } from "~/places/usecases/create-new-polace";
import InputGroup from "~/places/views/components/input-group";
import { Container } from "~/shared/design-system/container";
import Input from "~/shared/design-system/input";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const websiteUrl = formData.get("website") as string;
  const tags = formData.get("tags") as string;

  const place = { name, websiteUrl, tags: tags.split(" ") };

  const newPlace = await createNewPlace(place);

  return null;
};

export default function Admin() {
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
