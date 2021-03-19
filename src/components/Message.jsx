import React from "react";
import PropTypes from 'prop-types';
import iconLike from 'assets/image/like-message.svg'
import iconLikeFill from 'assets/image/like-message-fill.svg'
import iconCross from 'assets/image/cross.svg'
import { dataUsers, dataNews } from 'Data';
import NewsItem from 'components/NewsItem';

const Message = ({ isMyMessage, messageText, isLiked, changeHistory, idInterlocutor, idUser, index }) => 
  <div className={isMyMessage ? 'message my-message':'message'}>
    {typeof messageText === 'object' ? <NewsItem 
      id={messageText.idNews}
      data={dataNews[messageText.idNews]}
      isShare={true}/> : <span>{messageText}</span>
    }
  <div className="actions-message">
    <button className="action-btn" onClick={()=>{
      const { history } = dataUsers[idUser].messages[idInterlocutor];
      history[index].isLiked = !history[index].isLiked;
      changeHistory(new Array(...history));
    }}>
      <img src={isLiked ? iconLikeFill : iconLike} alt="like"/>
    </button>
    <button className="action-btn" onClick={()=>{
      const { history } = dataUsers[idUser].messages[idInterlocutor];
      history.splice(index,1);
      changeHistory(new Array(...history));
    }}>
      <img src={iconCross} alt="delete"/></button>
  </div>
</div>;

Message.propTypes = {
  isMyMessage: PropTypes.bool,
  messageText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  isLiked: PropTypes.bool,
  changeHistory: PropTypes.func,
  idUser: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  idInterlocutor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  index:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default Message;
