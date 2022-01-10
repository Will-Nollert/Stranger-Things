import React from 'react'

export const PostCards = ({ posts })=> {
    return (
        <div id = "postCards">
            <h2 class = "postCardElements"id= "postCardTitle">{posts.title}</h2>
            <hr></hr>
            <div class = "postCardElements" >{posts.description}</div>
            <div class = "postCardElements"id="postCardPrice"><b>Price:</b> {posts.price}</div>
            <div class = "postCardElements"id="postCardSeller"><b>Seller:</b></div>
            <div class = "postCardElements"id="postCardLocation"><b>Location:</b>{posts.location}</div>
        </div>
    )
}
export default PostCards


