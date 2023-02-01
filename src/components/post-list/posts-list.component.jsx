// import { useState } from 'react';
import Post from '../posts/post.component';
import './post-list.styles.scss';

const PostList = ( { posts } ) => {

    return(

        <div className="post-list">
            
         {posts.map((post, i) => {

                return (
                    <Post
                    key={post?.id}
                    id={post?.id}
                    title = {post?.title.rendered}
                    link = {post?.link}         
                    img = {post && post._embedded && post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : null }
                    category = {post?.categories}
                    />
                )
            })
        }

       </div>
    )

}

export default PostList