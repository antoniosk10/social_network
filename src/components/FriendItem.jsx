import React from "react";
import PropTypes from 'prop-types';
import { dataUsers } from 'Data';
import { Link } from 'react-router-dom';

const FriendItem = ({ idFriend }) => (
  <article className="friend-item">
    <div className="avatar">
      <img src={dataUsers[idFriend].avatar} alt="friend"/>
    </div>
    <div>
      <p>{dataUsers[idFriend].name}</p>
    </div>
    <Link className="friend-item__btn" to={`/messages/${idFriend}`}>Send message</Link>
  </article>
);

FriendItem.propTypes = {
  idFriend: PropTypes.number,
};

export default FriendItem;
