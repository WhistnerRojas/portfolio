import '../css/contact.css'
import Contactfield from '../contacts/contactfield'
import { Button, Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { contactFormSchema } from '../contacts/contactFormSchema';

interface FormData {
    fullName: string;
    email: string;
    message: string;
}

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(contactFormSchema)
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <section className='container py-3' id='intersectsContact'>
            <h2 className='text-center'>{'<'} Contact {'/>'}</h2>
            <div className="row">
                <div className="col">
                    <Box
                    component='form'
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{
                        '& .MuiInputLabel-root': {color: '#f0f0f0'},
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
                    className='d-flex justify-content-end flex-column py-5'
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
                </div>
                <div className="col">
                    <p>Let's Connect</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
