import './chatbox.js'
import axios from 'axios';
import './chatbox.css';
import Markdown from 'https://esm.sh/react-markdown@9'
import { useState } from 'react';

export default function Chatbox(){
    const [input, setInput] = useState("");
    const [chat, setChat] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            e.target.value = ""
            const response = await axios.post('http://localhost:2001/api', { text: "im using u as a travel guide, so if asked give response accordingly, The input:"+input, history: chat });
            setChat([ { type: 'user', text: input }, { type: 'bot', text: response.data.generatedText },...chat]);
            setInput("");
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className="App bg-gray-800 p-4 chatbox">
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type='text'
                    className="border border-black border-solid p-2 mr-2"
                    value={input}
                    onChange={handleChange}
                />
                <button type='submit' className="bg-blue-500 text-white p-2">Submit</button>
            </form>
            <div className="w-full bg-slate-400 p-4">
                {chat.map((entry, index) => (
                    <div key={index} className={` response p-2 ${entry.type === 'user' ? 'text-right text-black ' : 'text-left bg-slate-500 m-[10px]'}`}>
                        <div className='text-main'>
                        <Markdown>
                            {entry.text}
                        </Markdown>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}