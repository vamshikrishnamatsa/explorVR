import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero.js';
import './App.css';
import Button from './components/button/button.js';
import Month from './components/month/month.js';
import Todo from './components/todo/todo.js';
import Footer from './components/footer/footer.js';
import Feedback from './components/feedback/feedback.js';
import Calender from './components/calender/calender.js';
import Chatbox from './Chatbox/chatbox.js';
import { useState } from 'react';
import robot from './robot.avif'


function App() {
  const [displayChat, setChat] = useState(false);

  const handleChatboxClick = (e) => {
    e.stopPropagation();
  };

  const toggleChatbox = (e) => {
    e.stopPropagation();
    setChat(!displayChat);
  };

  return (
    <div className="App poppins-regular" onClick={() => setChat(false)}>
      <Navbar />
      <Hero />
      <Button />
      <Month />
      <Calender />
      <Feedback />
      <Todo />
      <Footer />
      <div className='boxc' onClick={toggleChatbox}>
        {displayChat && (
          <div onClick={handleChatboxClick}>
            <Chatbox />
          </div>
        )}
        <img alt = "robot" src={robot} className='robot'>
        
        </img>
      </div>
    </div>
  );
}

export default App;
