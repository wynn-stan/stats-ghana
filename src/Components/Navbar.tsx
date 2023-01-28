import React, { useState } from "react";
import {Container, Navbar as BsNavbar, Nav} from "react-bootstrap";
import {GrMenu, GrSearch} from "react-icons/gr";
import Select from "react-select";
import { useAppContext } from "../Context/AppContext";
import { getDefaultValues, setChartList } from "./Navbar/utils";
import Offcanvas from "./Offcanvas";
import SearchModal from "./SearchModal";


const Navbar = () => {

    const ctx = useAppContext();
    const [isSelecting, setIsSelecting] = ctx.searchbar;
    const [list, setList] = ctx.charts;

    const handleSearchClose = (selected: any[]) => {
        setList(selected);
        setIsSelecting(false)
    }

    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const handleNavClose = () => setMenuOpen(false)

    return (
        <BsNavbar sticky="top" className="shadow-sm mb-4 bg-light">
            <Container>
                <Offcanvas show={menuOpen} handleClose={handleNavClose}/>
                <GrMenu onClick={() => setMenuOpen(true)}/>
                <BsNavbar.Brand href="#" className="nav-header">Stats Ghana</BsNavbar.Brand>
                <BsNavbar.Toggle />
                <Nav className="justify-content-end">
                    <GrSearch className="add-btn" onClick={() => setIsSelecting(true)} />
                    <SearchModal 
                        isSelecting={isSelecting} 
                        handleClose={handleSearchClose}
                        list={list}
                        setList={setList}
                    />
                </Nav>
            </Container>
        </BsNavbar>
    )
}

export default Navbar;
