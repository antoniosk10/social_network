import React from "react";
import PropTypes from 'prop-types';
import { dataUsers } from 'Data';
import iconLike from 'assets/image/like.svg'
import iconLikeFill from 'assets/image/like-fill.svg'
import iconShare from 'assets/image/share.svg'

const NewsItem = ({ data, isLiked, id, toggleLikePost }) => <article className="post">
  <div className="post-title">
    <div className="avatar">
        <img src={dataUsers[data.authorID].avatar} alt={`avatar_${dataUsers[data.authorID].name}`}/>
    </div>
    <div className="post-info">
      <p>{dataUsers[data.authorID].name}</p>
      <p>{data.timePost}</p>
    </div>
  </div>
  <p>{data.postText}</p>
  <div className="actions-post">
    <button className="action-btn action-btn--white" onClick={toggleLikePost} data-id-post={id}>
      <img src={isLiked ? iconLikeFill : iconLike} alt="like"/>
    </button>
    <button className="action-btn"> <img src={iconShare} alt="share"/></button>
  </div>
 </article>
 
NewsItem.propTypes = {
  data: PropTypes.object,
  isLiked: PropTypes.bool,
  likePost: PropTypes.func,
  id: PropTypes.string,
  toggleLikePost: PropTypes.func
};

export default NewsItem;
