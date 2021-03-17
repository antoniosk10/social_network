import React from "react";
import PropTypes from 'prop-types';
import { dataUsers } from 'Data';

const ChatPreview = ({ idInterlocutor, toggleChat, idUser }) => {
  const historyMessages = dataUsers[idUser].messages[idInterlocutor].history;

  return <article className="message-preview" onClick={()=>toggleChat(idInterlocutor)}>
    <div className="avatar">
      <img src={dataUsers[idInterlocutor].avatar} alt="messagePreview"/>
    </div>
    <div className="message-preview-info">
      <p>{dataUsers[idInterlocutor].name}</p>
      <p className="last-message">{historyMessages[historyMessages.length - 1].text}</p>
    </div>
  </article>
}

ChatPreview.propTypes = {
  idInterlocutor: PropTypes.string,
  toggleChat: PropTypes.func,
  idUser: PropTypes.string
};

export default ChatPreview;
