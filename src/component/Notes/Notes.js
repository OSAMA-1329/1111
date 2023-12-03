import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import '../../App.css';
import NoteList from './NoteList';
import { FaTextHeight } from "react-icons/fa";
import { BsPaintBucket } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import { MdFormatColorText } from "react-icons/md";
import { FaAlignLeft } from "react-icons/fa";
import { ImUndo2 } from "react-icons/im";
import { ImRedo2 } from "react-icons/im";
import { FaRegClock } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../redux/postsSlice';

export default function Notes() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.items)

    return (
        <>
            <div className='bg-info p-2 m-1 h-100 w-100'>
                <Form type="submit" onSubmit={(e) => e.preventDefault()}>
                    <div className='d-flex align-content-center justify-content-between p-2'>
                        <h1>Add a Note</h1>
                        <span>
                            <CloseButton />
                        </span>
                    </div>
                    <Form.Control name='title' size="lg" value={title} onChange={(e) => setTitle(e.target.value)} required className='w-75 border-0 bg-light' type="text" placeholder="Title" />
                    <br />
                    <Form.Control name='content' value={content} onChange={(e) => setContent(e.target.value)} required type="text" className='w-50 border-0' placeholder="Take a note..." />
                    <br />
                    <Button type='submit' onClick={() => {
                        if (title && content) {
                            dispatch(addPost({ id: posts.length + 1, title: title, content: content }))
                            setTitle("");
                            setContent("");
                        }
                    }} className="btn btn-success">
                        ADD NOTE
                    </Button>
                    <small className='mt-3 bg-secondary text-light rounded p-2 m-2'><FaRegClock />  {new Date(Date.now()).toDateString("en-GB")}</small>
                </Form>
                <div className='p-1 m-1 d-flex align-content-center justify-content-around w-50 mt-3 g-5 '>
                    <FaTextHeight />
                    <BsPaintBucket />
                    <MdFormatListBulleted />
                    <MdFormatColorText />
                    <FaAlignLeft />
                    <ImUndo2 />
                    <ImRedo2 />
                </div>
            </div>
            <div className='overflow-auto'>
                <NoteList />
            </div>
        </>
    )
}
