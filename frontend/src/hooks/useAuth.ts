"use client";

import { useAuthStore } from "@/store/authStore";

export default function useAuth() {
  const { user, isAuthenticated } = useAuthStore();

  return {
    user,
    isAuthenticated,
  };
}