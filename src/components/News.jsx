import React, { Component, Fragment } from "react";
import { dataNews } from 'Data';
import NewsItem from 'components/NewsItem';
import {setData, getData} from 'localStorageUtil';
import PropTypes from 'prop-types';
import Popup from 'components/Popup';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likedPosts:new Set(getData("favoritePosts")) || new Set(),
      showPopup:false,
      idPost:0
    }
  }

  toggleLikePost = (e) => {
    this.setState(prevState => {
      const likedPosts= new Set(prevState.likedPosts);
      const { idPost } = e.target.closest('button').dataset;
  
      if(likedPosts.has(idPost)) {
        likedPosts.delete(idPost);
      }
      else {
        likedPosts.add(idPost);
      }
      setData("favoritePosts",Array.from(likedPosts));

      return {
        ...prevState,
        likedPosts
      } 
    });
  }

  showPopup = (e) => {
    this.setState(prevState => ({
        ...prevState,
        showPopup:true,
        idPost:e.target.closest('.action-btn').dataset.idPost
      }));
  }

  render() {
    const { likedPosts } = this.state; 

    if(this.props.isFavoriteNews) {
      return <Fragment>
      <section>
        <h2>Favorite news</h2>
        {Object.keys(dataNews).map((el, index) => likedPosts.has(el) ? <NewsItem 
          key={index}
          id={el}
          data={dataNews[el]}
          isLiked={likedPosts.has(el)}
          toggleLikePost={this.toggleLikePost}
          showPopup={this.showPopup}/> : null)}
      </section>
     {this.state.showPopup ? <Popup idUser={this.props.idUser} idPost={this.state.idPost}/> : null}
     </Fragment>
    }

    return <Fragment>
      <section>
        <h2>News</h2>
        {Object.keys(dataNews).map((el, index) => <NewsItem 
          key={index}
          id={el}
          data={dataNews[el]}
          isLiked={likedPosts.has(el)}
          toggleLikePost={this.toggleLikePost}
          showPopup={this.showPopup}/>)}
      </section>
      {this.state.showPopup ? <Popup idUser={this.props.idUser} idPost={this.state.idPost}/> : null}
    </Fragment>
  }
}

News.propTypes = {
  isFavoriteNews: PropTypes.bool,
  idUser: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default News;
