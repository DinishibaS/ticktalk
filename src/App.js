import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css'; 

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;


    return (
        <ChatEngine
            height="100vh"
            projectID="15853aa1-07de-42b2-9e7c-516636766989"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            />

    ); 
}
export default App; 