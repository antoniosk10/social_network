import React from "react";
import PropTypes from 'prop-types';
import { dataUsers } from 'Data';
import ChatPreview from 'components/ChatPreview';

const ChatsList = ({ idUser, toggleChat, activeChatID}) => {
  const chatList =  dataUsers[idUser].messages;
 
  if(!(activeChatID in chatList) && activeChatID !== -1) {
    chatList[activeChatID] = {
      idInterlocutor:activeChatID,
      history:[
        
      ]
    }
  }
 
  return <article className="chats-list">
    { Object.keys(chatList).map((el,index) => <ChatPreview 
    key={index} 
    toggleChat={toggleChat} 
    idUser={idUser} 
    idInterlocutor={el} 
    isActive={activeChatID === el}/>) }
  </article>
}

ChatsList.propTypes = {
  idUser: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  toggleChat: PropTypes.func,
  activeChatID: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default ChatsList;
