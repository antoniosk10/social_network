import React from "react";
import PropTypes from 'prop-types';
import { dataUsers } from 'Data';
import iconLike from 'assets/image/like.svg'
import iconLikeFill from 'assets/image/like-fill.svg'
import iconShare from 'assets/image/share.svg'

const NewsItem = ({ data, isLiked, id, toggleLikePost, showPopup, isShare }) => <article className="post">
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
  {isShare ? null : <div className="actions-post">
    <button className="action-btn action-btn--white" onClick={toggleLikePost} data-id-post={id}>
      <img src={isLiked ? iconLikeFill : iconLike} alt="like"/>
    </button>
    <button className="action-btn" data-id-post={id} onClick={showPopup}> <img src={iconShare} alt="share"/></button>
  </div>
  }
  
 </article>
 
NewsItem.propTypes = {
  data: PropTypes.object,
  isLiked: PropTypes.bool,
  likePost: PropTypes.func,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  toggleLikePost: PropTypes.func,
  showPopup: PropTypes.func,
  isShare: PropTypes.bool
};

export default NewsItem;
