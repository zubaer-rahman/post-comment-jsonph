import { imageListClasses } from '@mui/material';
import React from 'react';
import './Comment.css';
const Comment = ({comment}) => {
    return (
        <div className="comment d-flex">
            <div className="comment-avatar col-md-2">
                {
                  <img style={{width:"100px", borderRadius:"50%"}} src={comment.img} alt="image Not found!" />  
                }
            </div>
            <div className='comment-content col-md-10'>
                <h6> CommentTitle: {comment.name}</h6>
                <p> Email: {comment.email}</p>
                <p> <small> Body: {comment.body} </small></p>
            </div>
            <hr />
        </div>
    );
};

export default Comment;