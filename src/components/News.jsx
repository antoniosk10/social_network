import React, { Component } from "react";
import { dataNews } from 'Data';
import NewsItem from 'components/NewsItem';
import {setData, getData} from 'localStorageUtil';
import PropTypes from 'prop-types';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likedPosts:new Set(getData("favoritePosts")) || new Set(),
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

  render() {
    const { likedPosts } = this.state; 

    if(this.props.isFavoriteNews) {
      return <section>
      <h1>Favorite news</h1>
      {Object.keys(dataNews).map((el, index) => likedPosts.has(el) ? <NewsItem 
        key={index}
        id={el}
        data={dataNews[el]}
        isLiked={likedPosts.has(el)}
        toggleLikePost={this.toggleLikePost}/> : null)}
    </section>
    }

    return <section>
      <h1>News</h1>
      {Object.keys(dataNews).map((el, index) => <NewsItem 
        key={index}
        id={el}
        data={dataNews[el]}
        isLiked={likedPosts.has(el)}
        toggleLikePost={this.toggleLikePost}/>)}
    </section>
  }
}

News.propTypes = {
  isFavoriteNews: PropTypes.bool,
};

export default News;
