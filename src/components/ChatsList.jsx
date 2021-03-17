import React from "react";
import PropTypes from 'prop-types';
import { dataUsers } from 'Data';
import ChatPreview from 'components/ChatPreview';

const ChatsList = ({ idUser, toggleChat}) => (
  <article className="chats-list">
    { Object.keys(dataUsers[idUser].messages).map((el,index) => <ChatPreview key={index} toggleChat={toggleChat} idUser={idUser} idInterlocutor={el}/>) }
  </article>
);

ChatsList.propTypes = {
  idUser: PropTypes.number,
  toggleChat: PropTypes.func,
};

export default ChatsList;
