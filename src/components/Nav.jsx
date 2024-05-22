import React from "react";
import { CiSearch } from "react-icons/ci";
import ruFlag from "../assets/images/rus-flag.png";
import uzFlag from "../assets/images/uzbekistan-flag.gif";
import { ru, uz } from "../lang";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";

const nav = () => {
    const [flag, setFlag] = useState(true);
    const [lang, setLang] = useState(uz);
    const [active, setActive] = useState(false);
    const changeLang = (til) => {
        til == "uz" ? setLang(ru) : setLang(uz);
        setFlag(!flag);
    };
    return (
        <>
            <nav className="nav">
                <div className="nav__lang">
                    <button className={`nav__lang__btn ${flag && 'active'}`} onClick={()=>changeLang("uz")}>
                        <span>Uz</span>
                        <img src={uzFlag} alt="" />
                    </button>
                    <button className={`nav__lang__btn ${!flag && 'active'}`} onClick={()=>changeLang("ru")}>
                        <span>Ru</span>
                        <img src={ruFlag} alt="" />
                    </button>
                </div>
                <div className="container">
                    <h2 className="nav__title">{lang.appbartitle}</h2>
                </div>
                <button className="nav__search" onClick={() => setActive(true)}>
                    <CiSearch />
                </button>
            </nav>

            <nav className={`nav search ${active && "active"}`}>
                <button className="nav__back" onClick={() => setActive(false)}>
                    <IoMdArrowRoundBack />
                </button>
                <div className="container">
                    <input type="text" className="nav__input" placeholder="qidirsh..." />
                </div>
                <button className="nav__search">
                    <IoMdCloseCircleOutline />
                </button>
            </nav>
        </>
    );
};

export default nav;
