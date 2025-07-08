import React, { useState } from 'react'
import { LuEllipsisVertical } from 'react-icons/lu';
import "./DropDownMenu.css";

function DropDownMenu({options}) {

    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu(){
        setIsOpen(!isOpen);
    }

    return (
        <div className='drop_down_menu-container'>
            <LuEllipsisVertical className="drop_down_menu-btn" onClick={toggleMenu} />
            {isOpen && (
                <ul className='drop_down_menu'>
                    {options.map((option, index) => {
                        return <li className="drop_down_menu-option" key={index}>{option}</li>
                    })}
                </ul>
            )}
        </div>
    )
}

export default DropDownMenu