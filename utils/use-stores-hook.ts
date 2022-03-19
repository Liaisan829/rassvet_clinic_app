import { useContext } from "react";
import { MobXProviderContext } from "mobx-react";
import { MainStore } from "../stores/MainStore";

export function useStores(): MainStore {
  return <MainStore>useContext(MobXProviderContext);
}