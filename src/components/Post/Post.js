import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
const Post = ({post}) => {

    return (
        <div className='post'>
            <h3>{post.title} </h3>
            <p> {post.body} </p>
            <Link to={`/post/${post.id}`} > <button className='detail-btn' > Details.. </button> </Link>
        </div>
    );
};

export default Post;