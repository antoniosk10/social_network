import React from "react";
import PropTypes from 'prop-types';
import { dataUsers } from 'Data';
import FriendItem from 'components/FriendItem';

const FriendsPage = ({ idUser}) => (
  <section>
    <h2>Friends</h2>
    { dataUsers[idUser].friends.map((el,index) => <FriendItem key={index} idFriend={el}/>) }
  </section>
);

FriendsPage.propTypes = {
  idUser: PropTypes.number,
};

export default FriendsPage;
