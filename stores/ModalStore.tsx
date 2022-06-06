import { MainStore } from "./MainStore";

export class ModalStore {
    currentModal = null;

    constructor(mainStore: MainStore) {
        this.currentModal = null;

    }

    setCurrentModal = (modal:any) => {
        this.currentModal = modal;
    };

    clearCurrentModal = () => {
        this.currentModal = null;
    };
}