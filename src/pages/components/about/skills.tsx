import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

export default function Skills(props: any) {

    return (
        <>
            <Button
                onClick={props.click}
                aria-controls={`collapse-desc${props.id}`}
                aria-expanded={props.open}
                className={`m-1 fw-semibold text-white bg-white bg-opacity-25 border-0 skillsHover ${props.open === true && 'active'}`}
            >
            {props.tech}
            </Button>
            <Collapse in={props.open}>
                <div id={`collapse-desc${props.id}`} className='ps-3'>
                    {props.desc}
                </div>
            </Collapse>
        </>
    )
}