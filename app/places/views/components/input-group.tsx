import type { PropsWithChildren } from "react";

export default function InputGroup({ children }: PropsWithChildren) {
  return <div className="mb-8 w-full">{children}</div>;
}
