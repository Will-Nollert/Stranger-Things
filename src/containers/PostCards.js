import React from 'react'

export const PostCards = ({ posts })=> {
    return (
        <div id = "postCards">
            <h2 className='postCardElements' id= "postCardTitle">{posts.title}</h2>
            <hr></hr>
            <div className='postCardElements'  >{posts.description}</div>
            <div className='postCardElements' id="postCardPrice"><b>Price:</b> {posts.price}</div>
            <div className='postCardElements' id="postCardSeller"><b>Seller:</b></div>
            <div className='postCardElements' id="postCardLocation"><b>Location:</b>{posts.location}</div>
        </div>
    )
}
export default PostCards


