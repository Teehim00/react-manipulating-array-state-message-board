import { useState } from "react";
function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const addInputMessage = (event) => {
    event.preventDefault();

    const newInput = {
      id: message.length + 1,
      message: inputMessage,
    };

    setMessage([...message, newInput]);
    setInputMessage("");
  };

  const handleDelete = (id) => {
    const updatedMessages = message.filter((message) => message.id !== id);
    setMessage(updatedMessages);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputMessage}
            onChange={(event) => setInputMessage(event.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={addInputMessage}>
          Submit
        </button>
      </div>
      <div className="board">
        {message.map((message) => (
          <div key={message.id} className="message">
            <div>{message.message}</div>
            <button
              className="delete-button"
              onClick={() => handleDelete(message.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
