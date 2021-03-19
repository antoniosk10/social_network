import React, { useEffect, useState } from "react";
import ChatsList from 'components/ChatsList';
import Chat from 'components/Chat';
import PropTypes from 'prop-types';
import { dataUsers } from 'Data';

const MessagesPage = ({ idUser, idInterlocutor }) => {
  const [activeChatID, toggleChat] = useState(idInterlocutor || -1);
  const [history, changeHistory] = useState([]);
  
  useEffect(() => {
    if(idInterlocutor) {
      changeHistory(dataUsers[idUser].messages[idInterlocutor].history);
    }
  },[]) 

  return <section className="message-page">
    <h2>Messages</h2>
    <div className="message-list">
      <ChatsList idUser={idUser} toggleChat={(id) => {
        changeHistory(dataUsers[idUser].messages[id].history);
        toggleChat(id);
      }} 
        activeChatID={activeChatID}/>
      { activeChatID !== -1 ? <Chat idUser={idUser} idInterlocutor={activeChatID} history={history} changeHistory={changeHistory}/> : null }
    </div>
  </section>
}

MessagesPage.propTypes = {
  idUser: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  idInterlocutor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default MessagesPage;
