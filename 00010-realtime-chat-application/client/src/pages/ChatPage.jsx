
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

const ChatPage = () => {
  const [inpurValues, setinpurValues] = useState("");
  const [massage, setMassage] = useState([]);
  const socketRef = useRef();
  const { accessToken,user } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inpurValues.trim()) return;

    socketRef.current.emit("message", {
      content: inpurValues,
    });

    setMassage((prev) => [
      ...prev,
      { content: inpurValues, outgoing: true },
    ]);

    setinpurValues("");
  };

  useEffect(() => {
    if (!accessToken) return;

    const socket = io({
      extraHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    socketRef.current = socket;

    socket.on("message", (msg) => {
      setMassage((prev) => [
        ...prev,
        { ...msg, outgoing: false },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, [accessToken]);

  return (
    <div className="chat-page">
      <div className="chat-container">

        <div className="chat-header">
          <div className="chat-avatar">RK</div>

          <div className="chat-user-info">
            <h3>{user?.name}</h3>
            <p>
              <span className="online-dot"></span>
              Online
            </p>
          </div>
        </div>

        <div className="chat-messages">
          {massage.map((item, index) => (
            <div
              key={index}
              className={`message-row ${
                item.outgoing ? "outgoing" : "incoming"
              }`}
            >
              <div className="message-bubble">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="chat-footer" onSubmit={handleSubmit}>
          <input
            value={inpurValues}
            onChange={(e) => setinpurValues(e.target.value)}
            type="text"
            placeholder="Type your message..."
            className="chat-input"
          />

          <button type="submit" className="send-button">
            Send
          </button>
        </form>

      </div>
    </div>
  );
};

export default ChatPage;
