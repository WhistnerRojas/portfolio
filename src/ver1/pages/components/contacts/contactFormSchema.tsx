import * as yup from 'yup';

export const contactFormSchema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
});
