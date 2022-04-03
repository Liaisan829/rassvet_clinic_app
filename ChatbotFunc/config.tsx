import {createChatBotMessage} from "react-chatbot-kit";
import Options from "../components/ChatbotComp/Options/Options";
import Quiz from "../components/ChatbotComp/Quiz/Quiz";

const config = {
    botName: "Rassvet",
    initialMessages: [
        createChatBotMessage(`Добро пожаловать в чатбот клиники "Рассвет"! Что вас интересует?`, {
            widget: "options",
        }),
    ],
    widgets: [
        {
            widgetName: "options",
            widgetFunc: (props: any) => <Options {...props} />,
        },
        {
            widgetName: "workingHours",
            widgetFunc: (props: any) => <Quiz {...props} />,
            props: {
                questions: [
                    {
                        question: "Есть еще вопросы?",
                        id: 1
                    }
                ]
            }
        },
        {
            widgetName: "profile",
            widgetFunc: (props: any) => <Quiz {...props} />,
            props: {
                questions: [
                    {
                        question: "Есть еще вопросы?",
                        id: 1
                    }
                ]
            }
        }
    ],
};

export default config;