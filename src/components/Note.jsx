import React from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const note = ({note}) => {
  return (
    <div className='notes__card'>
      <div className="notes__title">{note.title}</div>
      <p className="notes__date">{note.date}</p>
      <p className="notes__text">{note.text}</p>
      <div className="notes__btns">
        <button className="btn btn__primary">
          <FaPencilAlt />
          <span>o'zgartirish</span>
        </button>
        <button className="btn btn__danger">
          <FaTrashAlt />
          <span>o'chirish</span>
        </button>
      </div>
    </div>
  )
}

export default note
