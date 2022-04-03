class MessageParser {
    [x: string]: any;

    constructor(actionProvider: any) {
        this.actionProvider = actionProvider;
    }

    parse(message: any) {

        const lowercase = message.toLowerCase();

        if (lowercase.includes("нет")) {
            this.actionProvider.bye();
        }

        if (lowercase.includes("да")) {
            this.actionProvider.next();
        }

        if (lowercase.includes("часы работы")) {
            this.actionProvider.handleWorkingHours();
        }

        if (lowercase.includes("профиль")) {
            this.actionProvider.handleProfile();
        }
    }
}

export default MessageParser;