import React, { useState } from "react";
import { IoMdGrid } from "react-icons/io";
import { FaList } from "react-icons/fa";
import Note from "../components/Note";

const Notes = () => {
    const [grid, setGrid] = useState(true);
    const [notes, setNotes] = useState([
        {id:1,title:"salom",date:new Date().toLocaleDateString(),text:"nimadrla"},
        {id:2,title:"nma",date:new Date().toLocaleDateString(),text:"nimadrla"},
        {id:3,title:"xayr",date:new Date().toLocaleDateString(),text:"nimadrla"}
    ]);
    return (
        <div className="notes">
            <div className="container">
                <div className="notes__top">
                    <h2 className="notes__top__title">Barcha eslatmalar</h2>
                    <button className="notes__top__btn" onClick={()=>setGrid(!grid)}>
                        {grid ? (
                            <>
                                <FaList />
                                <span>Royxat</span>
                            </>
                        ) : (
                            <>
                                <IoMdGrid />
                                <span>Jadval</span>
                            </>
                        )}
                    </button>
                </div>
                <div className={`notes__box ${ grid && "active"}`}>
                    {
                        notes.map(note=>(
                            <Note note={note}/>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Notes;
