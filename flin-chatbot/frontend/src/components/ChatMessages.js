import React, { useEffect, useRef } from 'react';

function ChatMessages({ messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]); // Scroll on new messages

  return (
    <div className="chat-messages-list">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
          {msg.text}
        </div>
      ))}
      {/* Empty div to help scrolling to bottom */}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatMessages;