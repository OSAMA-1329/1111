import React, { useState } from 'react';
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { deletePost, updatedPost } from '../../redux/postsSlice';
import { useDispatch } from 'react-redux';

export default function NoteItem({ title, content, id }) {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [isid, setISId] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [editContent, setEditContent] = useState("");

    return (
        <div className='d-flex flex-row h-100'>

            <div className='card m-1 text-center' style={{ width: "15rem", height: "12rem" }}>
                {isEdit && isid === id ? (
                    <>
                        <input type="text" required onChange={(e) => setEditTitle(e.target.value)} placeholder='Update Title' />
                        <input type="text" required onChange={(e) => setEditContent(e.target.value)} placeholder='Update Content' />
                        <button onClick={() => {
                            if (editTitle && editContent !== "") {
                                dispatch(updatedPost({ id: id, title: editTitle, content: editContent }))
                                setIsEdit(false);
                            }
                        }
                        }>Update</button>
                    </>
                ) :
                    <div className="card-body">
                        <div className='card-header d-flex p-1 align-content-center justify-content-between'>
                            <div className='card-title me-2'>{title} </div>
                            <div className='d-flex align-content-center'>
                                <button className='btn btn-info'>
                                    <GrEdit onClick={() => {
                                        setIsEdit(true)
                                        setISId(id)
                                    }} />
                                </button>
                                <button className="btn btn-danger ms-2" onClick={() => dispatch(deletePost(id))} >
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                        <div className='p-1 mt-3 mb-0'>
                            <div className='card-text'> {content && content.substr(0, 70) + "..."}  </div>

                            <div className='text-muted'>{new Date(Date.now()).toDateString("en-GB")}</div>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}
