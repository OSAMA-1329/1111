import React from 'react';
import NoteItem from './NoteItem';
import { useSelector } from 'react-redux';


export default function NoteList() {
    const posts = useSelector(state => state.posts.items)

    return (
        <div className='p-1 mt-2 m-1 h-100 w-100 d-flex flex-row'>
            {
                posts.length > 0 ? posts.map((post, value) => {
                    return (
                        <NoteItem
                            title={post.title}
                            id={post.id}
                            key={value}
                            content={post.content} />
                    )
                })
                    : "There is no posts available"}
        </div>
    )
}
