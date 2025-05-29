// src/components/Step5.js
import React, { useState } from 'react';
import {
    Box, Typography, TextField, Button, Alert,
} from '@mui/material';
import axios from 'axios';

const Step5 = ({ prevStep, values, handleChange, onBookingComplete }) => {
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        if (!values.startDate || !values.endDate) {
            setError('Please select start and end dates');
            return false;
        }
        if (values.startDate > values.endDate) {
            setError('Start date cannot be after end date');
            return false;
        }
        setError('');
        return true;
    };

    const submitBooking = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        const bookingData = {
            firstName: values.firstName,
            lastName: values.lastName,
            vehicleId: values.vehicleId,
            startDate: values.startDate,
            endDate: values.endDate,
        };

        try {
            await axios.post('/api/bookings', bookingData);
            setSuccessMessage('Booking successful!');
            onBookingComplete && onBookingComplete();
        } catch (err) {
            setError(err.response?.data?.message || 'Booking failed');
        }
    };

    return (
        <Box component="form" onSubmit={submitBooking} sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400, mx: 'auto', mt: 5, gap: 3 }}>
            <Typography variant="h5" textAlign="center">Select Dates For Booking</Typography>

            {error && <Alert severity="error">{error}</Alert>}
            {successMessage && <Alert severity="success">{successMessage}</Alert>}

            <TextField
                type="date"
                label="Start Date"
                InputLabelProps={{ shrink: true }}
                value={values.startDate}
                onChange={handleChange('startDate')}
                required
            />

            <TextField
                type="date"
                label="End Date"
                InputLabelProps={{ shrink: true }}
                value={values.endDate}
                onChange={handleChange('endDate')}
                required
                inputProps={{ min: values.startDate }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" onClick={prevStep}>Back</Button>
                <Button type="submit" variant="contained" color="primary">Book Vehicle</Button>
            </Box>
        </Box>
    );
};

export default Step5;
