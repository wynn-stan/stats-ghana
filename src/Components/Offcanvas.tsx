import React from 'react';
import { Card, Offcanvas as BsOffcanvas, Stack } from 'react-bootstrap';

import {Props} from './Offcanvas/interfaces'
import { data } from './Offcanvas/data';

import {FaGlobeAfrica} from "react-icons/fa";
import {BsClipboardData} from "react-icons/bs";
import {MdOutlineUpdate} from "react-icons/md";


const Offcanvas:React.FC<Props> = ({show, handleClose}) => {
    return (
        <BsOffcanvas show={show} onHide={handleClose}>
            <BsOffcanvas.Header closeButton>
                <BsOffcanvas.Title>Overview</BsOffcanvas.Title>
            </BsOffcanvas.Header>
            <BsOffcanvas.Body>
                <Card>
                    <Card.Img variant="top" src="/flag.png" className='flag' />
                </Card>
                <Stack gap={1} className="mt-3">
                    <span className="description-item"><FaGlobeAfrica />Country: {data.country}</span>
                    <span className="description-item"><BsClipboardData />Data Source: {data.data_source}</span>
                    <span className="description-item"><MdOutlineUpdate />Last Updated: {data.last_updated}</span>
                </Stack>
            </BsOffcanvas.Body>
        </BsOffcanvas>
    );
}
export default Offcanvas;
