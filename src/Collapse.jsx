import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const CollapseButton = () => {
  const [open, setOpen] = useState(false);
  const [rotateDegree, setRotateDegree] = useState(0);

  const toggleCollapse = () => {
    setOpen(!open);
    setRotateDegree(open ? 0 : 180); 
  };

  return (
    <>
      <Button
        onClick={toggleCollapse}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='collapse-btn'
       >
        Dropdown <MdOutlineKeyboardArrowDown  style={{ transition: 'transform 0.3s', transform: `rotate(${rotateDegree}deg)` }} />
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </Collapse>
    </>
  )
}

export default CollapseButton;
