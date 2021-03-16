import React, { Component } from "react";
import { dataNews } from 'Data';
import NewsItem from 'components/NewsItem';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likedPosts:new Set(),
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
      return {
        ...prevState,
        likedPosts
      } 
    });
  }

  render() {
    const { likedPosts } = this.state; 
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

export default News;
