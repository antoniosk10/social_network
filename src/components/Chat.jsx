import React from "react";
import PropTypes from 'prop-types';
import { dataUsers } from 'Data';
import Message from 'components/Message';
import iconSend from 'assets/image/send.svg';

const Chat = ({ idUser, idInterlocutor }) => <article className="chat">
    <div className="chat-field">
      { dataUsers[idUser].messages[idInterlocutor].history.map((el,index) => <Message key={index} isMyMessage={el.idUser === idUser} messageText={el.text}/>) }
    </div>
    <div className="send-input">
      <input type="text" placeholder="Type..."/>
      <button>
        <img src={iconSend} alt="send"/>
      </button>
    </div>
  </article>;

Chat.propTypes = {
  idUser: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  idInterlocutor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default Chat;
