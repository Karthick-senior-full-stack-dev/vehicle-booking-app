// src/components/Step1.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Step1 = ({ nextStep, handleChange, values }) => {
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!values.firstName.trim()) tempErrors.firstName = 'First Name is required';
        if (!values.lastName.trim()) tempErrors.lastName = 'Last Name is required';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const continueStep = (e) => {
        e.preventDefault();
        if (validate()) {
            nextStep();
        }
    };

    return (
        <Box
            component="form"
            onSubmit={continueStep}
            sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400, mx: 'auto', mt: 5, gap: 3 }}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h5" textAlign="center">Enter Your Name</Typography>

            <TextField
                label="First Name"
                variant="outlined"
                value={values.firstName}
                onChange={handleChange('firstName')}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName}
                required
            />
            <TextField
                label="Last Name"
                variant="outlined"
                value={values.lastName}
                onChange={handleChange('lastName')}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
                required
            />

            <Button type="submit" variant="contained" color="primary">
                Next
            </Button>
        </Box>
    );
};

export default Step1;
