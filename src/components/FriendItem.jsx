import React from "react";
import PropTypes from 'prop-types';
import { dataUsers, dataNews } from 'Data';
import { Link } from 'react-router-dom';

const FriendItem = ({ idFriend, idUser, idPost }) => (
  <article className="friend-item">
    <div className="avatar">
      <img src={dataUsers[idFriend].avatar} alt="friend"/>
    </div>
    <div>
      <p>{dataUsers[idFriend].name}</p>
    </div>
    <Link className="friend-item__btn" to={`/messages/${idFriend}`} onClick={()=>{
      if(idPost) {
        dataUsers[idUser].messages[idFriend].history.push({
            idUser,
            text:dataNews[idPost],
            isLiked:false
        });
      }
    }}>Send message</Link>
  </article>
);

FriendItem.propTypes = {
  idFriend: PropTypes.number,
  idUser: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  idPost: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default FriendItem;
