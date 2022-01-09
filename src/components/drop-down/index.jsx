import { React, useEffect, useState, useRef } from "react";
import colapse from "../../images/collapse.svg";
import expand from "../../images/expand.svg";
import { Container,Button,Span,DropDownIcon,DropDownWraper,Menu,Item } from "./dropdown.styles";

const DropDownMenu = (props) => {
  const { options, defaultValue, setFilterValue, filterValue } = props;
  const [open, setOpen] = useState(false);
  const container = useRef(null);

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleSearchFilter = (value) => {
    setFilterValue(value);
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <Container ref={container}>
      <Button onClick={() => setOpen(!open)}>
        <Span>{filterValue || defaultValue}</Span>
        <DropDownIcon src={open ? colapse : expand} alt="" />
      </Button>
      {open && (
        <DropDownWraper>
          <Menu>
            {options?.map((option) => (
              <Item
                key={option.id}
                className="dropdown-menu__item"
                onClick={(value) => handleSearchFilter(option.value)}
              >
                {option.value}
              </Item>
            ))}
          </Menu>
        </DropDownWraper>
      )}
    </Container>
  );
};

export default DropDownMenu;
