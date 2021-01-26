import React, { Component } from 'react';
import axios from '../../axios';
// import { Link } from 'react-router-dom';

import Post from '../../components/Post/Post'
import './Posts.css'

class Posts extends Component {
  state = {
    posts: [],
    // selectedPostId: null,
    // error: false,
  }

  componentDidMount() {
    console.log(this.props)
    axios.get('/posts')
      .then(response => { //executes once promise resolves
        const posts = response.data.slice(0, 6);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Brad',
          }
        })
        this.setState({ posts: updatedPosts });
        // console.log(updatedPosts)
      })
      .catch(error => {
        console.log(error);
        // this.setState({ error: true });
      })
  }

  postSelected = (id) => {
    // this.setState({ selectedPostId: id });
    
  }



  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link
          //   to={'/' + post.id}
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelected(post.id)} />
          // </Link>
        );
      });
    }

    return (
      <section className="Posts" >
        { posts}
      </section>
    );
  }
}

export default Posts;