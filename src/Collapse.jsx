import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import './Navbar.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const CollapseButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='collapse-btn'
      >
        Dropdown<MdOutlineKeyboardArrowDown />
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

export default CollapseButton