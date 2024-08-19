import * as React from 'react';
import {TextField } from '@mui/material';

export default function Contactfield({label, rows, register, error, multiline, helperText}:any) {
    return (
            <>
                {
                multiline ? <TextField 
                                        id="outlined-basic" 
                                        label={label} 
                                        variant="outlined" 
                                        // margin="normal"
                                        fullWidth
                                        multiline
                                        rows={rows}
                                        {...register}
                                        error={error}
                                        helperText={helperText}
                                    /> :
                                    <TextField 
                                        id="outlined-basic" 
                                        label={label} 
                                        variant="outlined" 
                                        // margin="normal"
                                        fullWidth
                                        {...register}
                                        error={error}
                                        helperText={helperText}
                                    />
                }
            </>
    );
}