import { createTypedHooks } from "easy-peasy";
import { type GlobalStore } from "../types";

const typedStoreHooks = createTypedHooks<GlobalStore>();

export const { useStoreState, useStoreActions, useStoreDispatch } =
  typedStoreHooks;
