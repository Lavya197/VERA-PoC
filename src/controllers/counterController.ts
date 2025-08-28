import { useCounterStore } from "@/store/useCounterStore";

export const counterController = {
  getCount: () => useCounterStore.getState().count,
  increase: () => useCounterStore.getState().increase(),
  decrease: () => useCounterStore.getState().decrease(),
};
