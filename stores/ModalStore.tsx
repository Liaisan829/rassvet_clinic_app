import { makeAutoObservable } from "mobx";
import { MainStore } from "./MainStore";

export class ModalStore {
    currentModal = null;

    constructor(mainStore: MainStore) {
        this.currentModal = null;

        makeAutoObservable(this);
    }

    setCurrentModal = (modal:any) => {
        this.currentModal = modal;
    };

    clearCurrentModal = () => {
        this.currentModal = null;
    };
}