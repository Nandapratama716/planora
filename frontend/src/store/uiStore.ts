import { create } from "zustand";

type UIState = {
  isLoading: boolean;
  isModalOpen: boolean;
  toastMessage: string | null;
  setLoading: (value: boolean) => void;
  openModal: () => void;
  closeModal: () => void;
  showToast: (message: string) => void;
  clearToast: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  isLoading: false,
  isModalOpen: false,
  toastMessage: null,
  setLoading: (value) => set({ isLoading: value }),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  showToast: (message) => set({ toastMessage: message }),
  clearToast: () => set({ toastMessage: null }),
}));