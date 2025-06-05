import type { ReactNode } from 'react';
import { create } from 'zustand';

type ModalStoreType = {
  isOpen: boolean;
  children: ReactNode | null;
  openModal: (children: ReactNode) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalStoreType>((set) => ({
  isOpen: false,
  children: null,
  openModal: (children) => {
    set({ isOpen: true, children });
  },
  closeModal: () => {
    set({ isOpen: false, children: null });
  },
}));
