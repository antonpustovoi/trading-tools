import { produce } from "immer";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCardPaymentsStore = create(
  persist(() => ({ data: [] }), {
    name: "card_payments",
  }),
);

export const addPayment = () =>
  useCardPaymentsStore.setState(
    produce((state) => {
      state.data.push({
        id: Date.now(),
        name: "",
        requestedAmount: "",
        receivedAmount: "",
      });
    }),
  );

export const updatePayment = (data) =>
  useCardPaymentsStore.setState(
    produce((state) => {
      const index = state.data.findIndex((item) => item.id === data.id);
      state.data[index] = data;
    }),
  );

export const deletePayment = (id) =>
  useCardPaymentsStore.setState((state) => ({
    data: state.data.filter((item) => item.id !== id),
  }));
