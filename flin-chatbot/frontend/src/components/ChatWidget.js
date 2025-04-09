import React, { useState, useEffect } from 'react';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import axios from 'axios'; // or use fetch

const API_URL = 'http://localhost:5001/api/chat'; // Your backend URL

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Welcome to FLIN! How can I assist you?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = async (userMessage) => {
    if (!userMessage.trim()) return;

    // Add user message immediately
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
        // --- Using Axios ---
        const response = await axios.post(API_URL, { message: userMessage });
        setMessages(prev => [...prev, { sender: 'bot', text: response.data.reply }]);

        // --- Or Using Fetch ---
        // const response = await fetch(API_URL, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ message: userMessage }),
        // });
        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const data = await response.json();
        // setMessages(prev => [...prev, { sender: 'bot', text: data.reply }]);

    } catch (error) {
        console.error("Error sending message:", error);
        setMessages(prev => [...prev, { sender: 'bot', text: 'Sorry, something went wrong. Please try again later.' }]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="chat-widget-container">
      {/* Floating Button */}
      {!isOpen && (
        <button onClick={toggleChat} className="chat-widget-button" aria-label="Open Chat">
          Chat with FLIN
          {/* You can use an icon here */}
          {/* <svg>...</svg> */}
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h2>FLIN Chat</h2>
            <button onClick={toggleChat} className="close-chat-button" aria-label="Close Chat">✕</button>
          </div>
          <ChatMessages messages={messages} />
          {isLoading && <div className="loading-indicator">Bot is typing...</div>}
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      )}
    </div>
  );
}

export default ChatWidget;