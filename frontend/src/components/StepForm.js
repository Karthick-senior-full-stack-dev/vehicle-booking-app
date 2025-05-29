// src/components/StepForm.js
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    wheels: '',
    vehicleTypeId: '',
    vehicleModel: '',
    startDate: null,
    endDate: null,
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 3:
      return <Step3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 4:
      return (
        <Step4 nextStep={nextStep} prevStep={prevStep} vehicleTypeId={formData.vehicleTypeId} values={formData} handleChange={handleChange} />
      );
    case 5:
      return <Step5 prevStep={prevStep} vehicleTypeId={formData.vehicleTypeId} values={formData} handleChange={handleChange} />;
    default:
      return <div>Form Completed</div>;
  }
};

export default StepForm;
