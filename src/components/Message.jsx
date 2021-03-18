import React from "react";
import PropTypes from 'prop-types';
import iconLike from 'assets/image/like-message.svg'
import iconLikeFill from 'assets/image/like-message-fill.svg'
import iconCross from 'assets/image/cross.svg'

const Message = ({ isMyMessage, messageText, isLiked }) => <div className={isMyMessage ? 'message my-message':'message'}>
  {messageText}
  <div className="actions-message">
    <button className="action-btn">
      <img src={isLiked ? iconLikeFill : iconLike} alt="like"/>
    </button>
    <button className="action-btn"> <img src={iconCross} alt="share"/></button>
  </div>
</div>;

Message.propTypes = {
  isMyMessage: PropTypes.bool,
  messageText: PropTypes.string,
  isLiked: PropTypes.bool
};

export default Message;
