import type { ActionArgs } from "@remix-run/node";
import AdminPage from "~/places/views/pages/admin";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const websiteUrl = formData.get("website");
  const tags = formData.get("tags");

  return null;
};

export default function Admin() {
  return <AdminPage />;
}
