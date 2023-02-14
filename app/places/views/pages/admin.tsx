import { useState } from "react";
import { Container } from "~/shared/design-system/container";
import Input from "~/shared/design-system/input";
import InputGroup from "../components/input-group";

export default function AdminPage() {
  const [placeName, setPlaceName] = useState("");
  const [placeUrl, setPlaceUrl] = useState("");
  const [placeTags, setPlaceTags] = useState("");

  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <Container>
        <h1>Adicionar novo lugar</h1>
        <form className="mt-4" method="post">
          <InputGroup>
            <Input
              value={placeName}
              name="name"
              label="Nome do lugar"
              placeholder="Nome do lugar"
              onChange={setPlaceName}
              ariaLabel="Nome do lugar para cadastro"
            />
          </InputGroup>
          <InputGroup>
            <Input
              value={placeUrl}
              name="website"
              label="Site do lugar"
              placeholder="Site do lugar"
              onChange={setPlaceUrl}
              ariaLabel="Endereço do site do bar a ser cadastrado"
            />
          </InputGroup>
          <InputGroup>
            <Input
              value={placeTags}
              name="tags"
              label="Tags do lugar"
              placeholder="Tags do lugar"
              onChange={setPlaceTags}
              ariaLabel="Categorias do lugar a ser cadastrado"
            />
          </InputGroup>

          <InputGroup>
            <button type="submit">Salvar</button>
          </InputGroup>
        </form>
      </Container>
    </main>
  );
}
