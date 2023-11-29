'use client'

import { StoreProvider as SP, createStore } from "easy-peasy";

import globalStore from "@/utils/store/globalStore";
import { GlobalStore } from "@/utils/types";

const store = createStore<GlobalStore>(globalStore);

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <SP store={store}>
      {children}
    </SP>
  );
}
