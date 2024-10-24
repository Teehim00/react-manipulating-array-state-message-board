import { useState } from "react";

function MessageBoard() {
  const [inputValue, setInputValue] = useState("");
  const [showmsg, setShowMsg] = useState([]);

  function addMsg(e) {
    e.preventDefault();

    const newMsg = {
      id: showmsg.length + 1,
      message: inputValue,
    };

    setShowMsg([...showmsg, newMsg]);

    setInputValue("");
  }

  function deleteMsg(id) {
    const updateMsg = showmsg.filter((data) => data.id !== id);
    setShowMsg(updateMsg);
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            value={inputValue}
            placeholder="Enter message here"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={addMsg}>
          Submit
        </button>
      </div>
      <div class="board">
        {showmsg.map((data) => (
          <div key={data.id} className="message">
            <h1>{data.message}</h1>
            <button
              className="delete-button"
              onClick={() => deleteMsg(data.id)}
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
