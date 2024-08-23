import * as Yup from 'yup';

const loginSchema  = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters.')
        .required('Password is required'),
});

const registerSchema = Yup.object({
    email: Yup.string()
        .email('Please enter a valid email address.')
        .required('Email is required.'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters.')
        .max(12, 'Password must be at most 12 characters.')
        .required('Password is required.'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match.')
        .required('Password confirmation is required.'),
    address: Yup.string()
        .required('Address is required.'),
    contact: Yup.string()
        .required('Contact number is required.'),
});

export {
    loginSchema,
    registerSchema
}