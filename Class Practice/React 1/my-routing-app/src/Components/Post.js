import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  state ={
    post: [ ]
  }

  componentDidMount() {
    //console.log(this.props);
    let id = this.props.match.params.post_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id).
    then(res=>{
      this.setState({
        post: res.data
      })
      console.log(this.state);
    })
  }
  render(){
    const post = this.state.post ? (
      <div className='post card'>
        <div className='center card-title'>{this.state.post.title }</div>
        <p>{this.state.post.body }</p>
      </div>
    ) : (<p>loading posts............</p>)
    return (
      <div className='container'>
        { post }
      </div>
    )
  }
}

export default Post;
