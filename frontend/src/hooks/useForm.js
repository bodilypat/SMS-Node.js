//src/hooks/useForm.js 

import { useState } from 'react';

const useForm = (initialValues = {}, validate = () => ({})) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // No validation errors, proceed with form submission logic
            console.log('Form submitted successfully:', values);
        }
    };
    
    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    };

    return {
        values,
        errors,
        setValues,
        handleChange,
        handleSubmit,
        resetForm,
    };
};

export default useForm;

