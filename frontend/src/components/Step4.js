// src/components/Step4.js
import React, { useState, useEffect } from 'react';
import {
    Box, Typography, FormControl, FormLabel,
    RadioGroup, FormControlLabel, Radio, Button, Alert, CircularProgress,
} from '@mui/material';
import axios from 'axios';

const Step4 = ({ nextStep, prevStep, vehicleTypeId, values, handleChange }) => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!vehicleTypeId) return;
        console.log("Fetching vehicles for typeId:", vehicleTypeId);

        setLoading(true);
        axios
            .get(`/api/vehicles?typeId=${parseInt(vehicleTypeId)}`)
            .then((res) => {
                setVehicles(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching vehicles:', err);
                setError('Failed to load vehicles');
                setLoading(false);
            });
    }, [vehicleTypeId]);

    const validate = () => {
        if (!values.vehicleId) {
            setError('Please select a vehicle model');
            return false;
        }
        setError('');
        return true;
    };

    const handleNext = () => {
        if (validate()) nextStep();
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400, mx: 'auto', mt: 5, gap: 3 }}>
            <Typography variant="h5" textAlign="center">Select Vehicle Model</Typography>

            {loading && <CircularProgress />}
            {error && <Alert severity="error">{error}</Alert>}

            <FormControl component="fieldset">
                <FormLabel component="legend">Vehicle Models</FormLabel>
                <RadioGroup
                    name="vehicleId"
                    value={values.vehicleId || ''}
                    onChange={handleChange('vehicleId')}
                >
                    {vehicles.length > 0 ? (
                        vehicles.map((vehicle) => (
                            <FormControlLabel
                                key={vehicle.id}
                                value={vehicle.id.toString()}
                                control={<Radio />}
                                label={vehicle.name}
                            />
                        ))
                    ) : (
                        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                            No vehicles found for this type.
                        </Typography>
                    )}
                </RadioGroup>
            </FormControl>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" onClick={prevStep}>Back</Button>
                <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Step4;
