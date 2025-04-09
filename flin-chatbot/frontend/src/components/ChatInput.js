import React, { useState } from 'react';

function ChatInput({ onSendMessage }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="chat-input-area">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your message..."
        aria-label="Chat message input"
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default ChatInput;