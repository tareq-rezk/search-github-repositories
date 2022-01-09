import {React, useEffect, useState, useRef } from "react";

const DropDownMenu = (props) => {

  const {options, setSortBy,sortBy}=props
  const [open, setOpen] = useState(false);
  const container = useRef(null);


  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <div className="dropdown-container" ref={container}>
      <button type="button" onClick={() => setOpen(!open)}>
        <span>{sortBy}</span>
        <img src={open ? "./collapse.svg" : "./expand.svg"} alt="" />
      </button>
      {open && (
        <div className="dropdown-wrapper">
          <ul className="dropdown-menu">
            {options?.map((option) => (
              <li
                key={option.id}
                className="dropdown-menu__item"
                onClick={() => setSortBy(option.value)}
              >
                {option.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
