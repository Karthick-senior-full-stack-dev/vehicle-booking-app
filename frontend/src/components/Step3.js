// src/components/Step3.js
import React, { useState, useEffect } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    Typography,
} from '@mui/material';
import axios from 'axios';

const Step3 = ({ nextStep, prevStep, handleChange, values }) => {
    const [vehicleTypes, setVehicleTypes] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!values.wheels) {
            setVehicleTypes([]);
            return;
        }

        const fetchVehicleTypes = async () => {
            try {
                const response = await axios.get('/api/vehicle-types');
                // Filter vehicle types by wheels
                // Assuming vehicle types have a "wheels" property (number)
                const filteredTypes = response.data.filter(
                    (type) => Number(type.wheels) === Number(values.wheels)
                );
                setVehicleTypes(filteredTypes);
            } catch (err) {
                console.error('Failed to fetch vehicle types:', err);
                setVehicleTypes([]);
            }
        };

        fetchVehicleTypes();
    }, [values.wheels]);

    const validate = () => {
        if (!values.vehicleTypeId) {
            setError('Please select a vehicle type');
            return false;
        }
        setError('');
        return true;
    };

    const continueStep = (e) => {
        e.preventDefault();
        if (validate()) {
            nextStep();
        }
    };

    const back = (e) => {
        e.preventDefault();
        prevStep();
    };

    return (
        <Box
            component="form"
            onSubmit={continueStep}
            sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400, mx: 'auto', mt: 5, gap: 3 }}
        >
            <Typography variant="h5" textAlign="center">Select Vehicle Type</Typography>

            <FormControl component="fieldset" error={Boolean(error)}>
                <FormLabel component="legend">Vehicle Type</FormLabel>
                <RadioGroup
                    aria-label="vehicle-type"
                    name="vehicleTypeId"
                    value={values.vehicleTypeId || ''}
                    onChange={handleChange('vehicleTypeId')}
                >
                    {vehicleTypes.length > 0 ? (
                        vehicleTypes.map((type) => (
                            <FormControlLabel
                                key={type.id}
                                value={type.id.toString()}
                                control={<Radio />}
                                label={type.name}
                            />
                        ))
                    ) : (
                        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                            No vehicle types available for selected wheels
                        </Typography>
                    )}
                </RadioGroup>
                {error && <Typography color="error" variant="body2">{error}</Typography>}
            </FormControl>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" onClick={back}>Back</Button>
                <Button type="submit" variant="contained" color="primary">Next</Button>
            </Box>
        </Box>
    );
};

export default Step3;
