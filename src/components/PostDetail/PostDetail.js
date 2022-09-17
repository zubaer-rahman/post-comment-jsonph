import React, { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const PostDetail = () => {
    const { post_id } = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const {userId, id, title, body}  = post;
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post_id}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, []);

    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=${comments.length}`)
        .then(res => res.json())
        .then(data => setPhotos(data.results.map(el => el.picture.medium)))

    }, [comments]);
    {
        photos.map((photo,i) => comments[i].img = photo)
    }
    return (
        <div style={{marginTop: "50px"}} className='post-detail'>
            <div className="container">  
                <Link to="/post" ><ArrowBackIosIcon style={{color:"blue", }}/></Link>
                <h5> PostTitle: {title} </h5>
                <p> Body: {body} </p>
                <hr />
            </div>
            <div className="container">
                {
                    comments.map((cm, i) => <Comment comment={cm} key={i}/>)
                }
            </div>
        </div>
    );
};

export default PostDetail;