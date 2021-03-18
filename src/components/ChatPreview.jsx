import React from "react";
import PropTypes from 'prop-types';
import { dataUsers } from 'Data';

const ChatPreview = ({ idInterlocutor, toggleChat, idUser, isActive }) => {
  const historyMessages = dataUsers[idUser].messages[idInterlocutor].history;
  const lastMessageData = historyMessages[historyMessages.length - 1];
  const lastMessage = lastMessageData ? lastMessageData.text : '';

  return <article className={isActive ? 'message-preview active':'message-preview'} onClick={()=>toggleChat(idInterlocutor)}>
    <div className="avatar">
      <img src={dataUsers[idInterlocutor].avatar} alt="messagePreview"/>
    </div>
    <div className="message-preview-info">
      <p>{dataUsers[idInterlocutor].name}</p>
      <p className="last-message">{lastMessage}</p>
    </div>
  </article>
}

ChatPreview.propTypes = {
  idInterlocutor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  toggleChat: PropTypes.func,
  idUser: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  isActive: PropTypes.bool
};

export default ChatPreview;
