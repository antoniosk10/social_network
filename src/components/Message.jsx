import React from "react";
import PropTypes from 'prop-types';

const Message = ({ isMyMessage, messageText }) => <div className={isMyMessage ? 'message my-message':'message'}>
  {messageText}
</div>;

Message.propTypes = {
  isMyMessage: PropTypes.bool,
  messageText: PropTypes.string
};

export default Message;
