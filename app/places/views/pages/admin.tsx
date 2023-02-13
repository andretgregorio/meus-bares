import { useState } from "react";
import { Container } from "~/shared/design-system/container";
import Input from "~/shared/design-system/input";

export default function AdminPage() {
  const [value, setValue] = useState("");

  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <Container>
        <h1>Adicionar novo lugar</h1>
        <Input value={value} name="teste" label="teste" onChange={setValue} />
      </Container>
    </main>
  );
}
