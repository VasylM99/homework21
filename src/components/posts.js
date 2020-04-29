import React, { useEffect } from 'react';
import Post from './post';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../store/actions/posts.actions';



function Posts() {
    const posts = useSelector(state => state.posts.posts);
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(getPosts())
    }, []);


    return posts.map(post =>
        <Post
            author={post.author}
            content={post.content}
            image={post.image}
            date={post.date}
        />

    )

};

export default Posts;