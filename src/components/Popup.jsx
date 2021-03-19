import React from "react";
import PropTypes from 'prop-types';
import { dataUsers } from 'Data';
import FriendItem from 'components/FriendItem';

const Popup = ({ idUser, idPost }) => <article className="popup-wrap">
  <div className="popup-content">
    <h2>Choose recipient</h2>
    {dataUsers[idUser].friends.map((el,index) => <FriendItem key={index} idFriend={el} idUser={idUser} idPost={idPost}/>)}
  </div>
 </article>
 
 Popup.propTypes = {
  idUser: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  idPost: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default Popup;
