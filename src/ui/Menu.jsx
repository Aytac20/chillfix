import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MdMenu } from "react-icons/md";
import Navbar from "../features/Header/Navbar";
import { IoClose } from "react-icons/io5";

function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow}
        className="!rounded-[4rem] !border-none !bg-[#222433] !py-[0.8rem] !text-[2.5rem] !text-[#d3d3d3]"
      >
        <MdMenu />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="!w-[25rem] !bg-[#222433]"
      >
        <Offcanvas.Header>
          <IoClose
            className="absolute top-4 right-4 cursor-pointer text-[2rem] text-white"
            onClick={handleClose}
          />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Navbar />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Menu;
