// src/components/Step2.js
import React, { useState } from 'react';
import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Typography } from '@mui/material';

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
    const [error, setError] = useState('');

    const validate = () => {
        if (!values.wheels) {
            setError('Please select number of wheels');
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
            <Typography variant="h5" textAlign="center">Select Number of Wheels</Typography>

            <FormControl component="fieldset" error={Boolean(error)}>
                <FormLabel component="legend">Wheels</FormLabel>
                <RadioGroup
                    aria-label="wheels"
                    name="wheels"
                    value={values.wheels || ''}
                    onChange={handleChange('wheels')}
                    row
                >
                    <FormControlLabel value="2" control={<Radio />} label="2 Wheels" />
                    <FormControlLabel value="4" control={<Radio />} label="4 Wheels" />
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

export default Step2;
