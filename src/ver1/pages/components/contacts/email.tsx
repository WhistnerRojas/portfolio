import Contactfield from '../contacts/contactfield'
import { Button, Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { contactFormSchema } from '../contacts/contactFormSchema';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
// import { string } from 'yup';

interface FormData {
    fullName: string;
    email: string;
    message: string;
}

export interface State extends SnackbarOrigin {
    open: boolean;
    msg: string;
}

export const Email = () => {

    const [state, setState] = useState<State>({
        open: false,
        vertical: "top",
        horizontal: "center",
        msg: ''
    });
    const { vertical, horizontal, open, msg } = state;

    const handleClose = ()=>{
        setState({ ...state, open: false });
    }


    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(contactFormSchema)
    });

    const form= useRef<HTMLFormElement>()

    const onSubmit = (data: FormData) => {
        // setState({ ...state, open: true, msg: 'Message sent!' })
        if(form && form.current){
            emailjs.sendForm('service_erdiz4k', 'template_23rrysf', form.current, '0WnMJ0BiL31tAZwFW')
            .then((result) => {
                result.text === 'OK' ? setState({ ...state, open: true, msg: 'Message sent!' }) : setState({ ...state, open: true, msg: 'There was a problem while sending your email. Please try again.' });
                form.current?.reset()
            }, (error) => {
                console.log(error.text);
            });
        }
    };

    return (
        <>
            <div>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    autoHideDuration={3000}
                    open={open}
                    onClose={handleClose}
                    message={msg}
                    key={vertical + horizontal}
                />
            </div>
            <Box
                component='form'
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    '& .MuiInputLabel-root': {
                        color: '#f0f0f0 !important',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                        borderColor: 'white', // Change this to the desired color
                        },
                        '&:hover fieldset': {
                            borderColor: 'rgb(0, 195, 255)', // Change this to the desired hover color
                        },
                        '&:focus fieldset': {
                            borderColor: 'rgb(0, 195, 255)', // Change this to the desired hover color
                        },
                        // width : '30ch', //change width of input 
                        backgroundColor: '#303030',
                    },
                    '& .MuiFormHelperText-root': {
                        fontSize: '14px',
                    },
                    '& .MuiTextField-root':{
                        mt: 2
                    }
                }}
                noValidate
                autoComplete="off"
                className='d-flex justify-content-end flex-column'
            >
                <Contactfield 
                    label='Full name'
                    register={{...register("fullName")}}
                    error={!!errors.fullName}
                    helperText={errors.fullName?.message}
                />
                <Contactfield 
                    label='Email'
                    register={{...register("email")}}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <Contactfield 
                    label='Message'
                    register={{...register("message")}}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    multiline={true}
                    rows={4}
                />
                <Button type="submit" variant="contained" color="primary" className='mt-3'>send message</Button>
            </Box>
        </>
    );
}