import { createChatBotMessage } from 'react-chatbot-kit';
import MyAvatar from './MyAvatar';
import MyCustomAvatar from './MyCustomAvatar';


const config = { 
  botName: "LearningBot",
  initialMessages: [createChatBotMessage("Hola, soy Eva, tu asistente virtual para informarte sobre la vacunación infantil. ¿En qué puedo ayudarte hoy?")],
  customComponents: {
   header: () => <div className='h-10 bg-darkBlue text-white font-bold m-auto text-lg p-2 rounded-t-lg'>Chat</div>,
   botAvatar: (props) => <MyAvatar {...props} />,
  userAvatar: (props) => <MyCustomAvatar {...props} />,

 },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#deefe7",
    },
    chatButton: {
      backgroundColor: "#e6e6e6",
    },
  },
} 

export default config