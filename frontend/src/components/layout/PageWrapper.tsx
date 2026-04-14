import type { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return <main className="mx-auto w-full max-w-6xl px-6">{children}</main>;
}