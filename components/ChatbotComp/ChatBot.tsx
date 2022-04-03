import Chatbot from 'react-chatbot-kit';
import config from "../../ChatbotFunc/config";
import ActionProvider from "../../ChatbotFunc/ActionProvider";
import MessageParser from "../../ChatbotFunc/MessageParser";
import 'react-chatbot-kit/build/main.css';

const ChatBot = () => {
    return (
        <>
            <Chatbot
                // @ts-ignore
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
            />
        </>
    );
};

export default ChatBot;