import React from "react";
import PropTypes from 'prop-types';
import Message from 'components/Message';
import iconSend from 'assets/image/send.svg';

const Chat = ({ idUser, idInterlocutor, history, changeHistory }) => <article className="chat">
    <div className="chat-field">
      { history.map((el,index) => <Message 
          key={index} 
          index={index}
          idUser={idUser} 
          idInterlocutor={idInterlocutor} 
          isMyMessage={el.idUser === idUser} 
          messageText={el.text} 
          changeHistory={changeHistory}
          isLiked={el.isLiked}/>) }
    </div>
    <div className="send-input">
      <input type="text" placeholder="Type..."/>
      <button>
        <img src={iconSend} alt="send"/>
      </button>
    </div>
  </article>
Chat.propTypes = {
  idUser: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  idInterlocutor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  history: PropTypes.array,
  changeHistory: PropTypes.func
};

export default Chat;
