import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return <div className="m-auto w-full max-w-4xl">{children}</div>;
}
