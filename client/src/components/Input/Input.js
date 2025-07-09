import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => {
  const handleSubmit = (e) => {
    console.log('Form submitted!'); // Debug log
    sendMessage(e);
  };

  const handleButtonClick = (e) => {
    console.log('Button clicked!'); // Debug log
    sendMessage(e);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
      />
      <button
        className="sendButton"
        type="submit"
        onClick={handleButtonClick}
      >
        Send
      </button>
    </form>
  );
};

Input.propTypes = {
  setMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default Input;