import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      {title ? <h3 className="mb-3 text-lg font-bold text-brand-900">{title}</h3> : null}
      {children}
    </article>
  );
}