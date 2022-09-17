import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data.slice(0, 10)))
    }, [])
 
    return (
        <div className='container'>
            <h1>This is Post</h1>
            {
                posts.map((post, i) => <Post post={post} key={i} />)
            }
            
        </div>
    );
};

export default Posts;