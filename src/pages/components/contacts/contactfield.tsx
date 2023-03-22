import * as React from 'react';
import {TextField } from '@mui/material';

export default function Contactfield(props:any) {
    return (
            <>
                {
                props.multiline ? <TextField 
                                        id="outlined-basic" 
                                        label={props.label} 
                                        variant="outlined" 
                                        // margin="normal"
                                        fullWidth
                                        multiline
                                        rows={props.rows}
                                        {...props.register}
                                        error={props.error}
                                        helperText={props.helperText}
                                    /> :
                                    <TextField 
                                        id="outlined-basic" 
                                        label={props.label} 
                                        variant="outlined" 
                                        // margin="normal"
                                        fullWidth
                                        {...props.register}
                                        error={props.error}
                                        helperText={props.helperText}
                                    />
                }
            </>
    );
}