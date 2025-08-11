import { create } from "zustand";

type Balance = {
  balance: number;
  increment: (by: number) => void;
  decrement: (by: number) => void;
};

export const useBalanceStore = create<Balance>((set) => ({
  balance: 0,

  increment: (by) => set((state) => ({ balance: state.balance + by })),

  decrement: (by) => set((state) => ({ balance: state.balance - by })),
}));
