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
                variant='outline-info'
                className='m-1 fw-semibold text-warning skillsHover'
            >
            {props.tech}
            </Button>
            <Collapse in={props.open}>
                <div id={`collapse-desc${props.id}`} className='ps-2'>
                    {props.desc}
                </div>
            </Collapse>
        </>
    )
}