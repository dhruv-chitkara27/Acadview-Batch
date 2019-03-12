import React, { Component } from 'react';
import axios from 'axios';
import './home.css'
class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res)
            this.setState({
                posts: res.data.slice(0, 9)
            })
        })
    }
    render() {
        const { posts } = this.state
        // console.log(posts)
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="marquee" key={post.id} >
                        <div className='post'>
                            <div className='content'>
                                <p>{post.title}</p>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
                <div>No Post Yet</div>
            )
        return (
            <div>
                {postList}
            </div>
        )
    }
}

export default Home
