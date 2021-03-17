import React from "react";
import PropTypes from 'prop-types';
import { dataUsers } from 'Data';

const FriendItem = ({ idFriend}) => (
  <article className="friend-item">
    <div className="avatar">
      <img src={dataUsers[idFriend].avatar} alt="friend"/>
    </div>
    <div>
      <p>{dataUsers[idFriend].name}</p>
    </div>
  </article>
);

FriendItem.propTypes = {
  idFriend: PropTypes.number,
};

export default FriendItem;
