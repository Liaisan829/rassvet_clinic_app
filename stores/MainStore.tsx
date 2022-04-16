import {ModalStore} from "./ModalStore";
import {UserStore} from "./UserStore";

export class MainStore {
    modalStore: ModalStore;
    userStore: UserStore

    constructor() {
        this.modalStore = new ModalStore(this);
        this.userStore = new UserStore(this)
    }
}

const mainStore = new MainStore();

export default mainStore;