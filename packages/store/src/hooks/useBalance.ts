import { useBalanceStore } from "../atoms/balance";

export const useBalance = () => useBalanceStore((state) => state.balance);

export const useBalanceIncrement = () =>
  useBalanceStore((state) => state.increment);

export const useBalanceDecrement = () =>
  useBalanceStore((state) => state.decrement);
