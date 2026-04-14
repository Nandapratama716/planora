"use client";

import type { ReactNode } from "react";
import useAuth from "@/hooks/useAuth";

type AuthGuardProps = {
  children: ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        Kamu perlu login untuk mengakses halaman ini.
      </div>
    );
  }

  return <>{children}</>;
}