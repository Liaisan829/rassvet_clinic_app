class ActionProvider {
    [x: string]: any;
    constructor(createChatBotMessage:any, setStateFunc:any) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    bye = () => {
        const message = this.createChatBotMessage("Если возникнут вопросы - обращайтесь. До встречи!")
        this.addMessageToState(message);
    }

    next = () => {
        const message = this.createChatBotMessage("Я вас слушаю!")
        this.addMessageToState(message);
    }

    handleWorkingHours = () => {
        const message = this.createChatBotMessage(
            "Время работы клиники с 8:00 до 21:00 без выходных",
            {
                widget: "workingHours",
            }
        );

        this.addMessageToState(message);
    };

    handleProfile = () => {
        const message = this.createChatBotMessage(
            "'Рассвет' - клиника широкого профиля \n -неврология \n -стоматология \n -дерматология \n Это и многое другое есть у нас!",
            {
                widget: "profile",
            }
        );

        this.addMessageToState(message);
    }

    addMessageToState = (message:any) => {
        this.setState((prevState: { messages: any; }) => ({
            ...prevState,
            messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider;