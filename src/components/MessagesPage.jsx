import React, { useState } from "react";
import ChatsList from 'components/ChatsList';
import Chat from 'components/Chat';
import PropTypes from 'prop-types';

const MessagesPage = ({ idUser }) => {
  const [activeChatID, toggleChat] = useState(-1);
  
  return <section className="message-page">
    <h1>Messages</h1>
    <div className="message-list">
      <ChatsList idUser={idUser} toggleChat={toggleChat}/>
      { activeChatID !== -1 ? <Chat idUser={idUser} idInterlocutor={activeChatID}/> : null }
    </div>
  </section>
}

MessagesPage.propTypes = {
  idUser: PropTypes.number,
};

export default MessagesPage;
