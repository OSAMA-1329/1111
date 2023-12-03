import React from 'react';
import { MdOutlineSpeakerNotes } from "react-icons/md";
import '../../App.css';

export default function Sidebar() {

    return (
        <div className=''>
            <h2 className='mt-5 ms-4'>Notes App</h2>
            <div className='mt-4 ms-3 me-2 p-2 text-white bg-dark rounded'><MdOutlineSpeakerNotes/> <span className='ms-2'>Notes</span></div>
        </div >
    );
}
