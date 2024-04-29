/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';

function RegistrationForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Handle form submission here
        console.log(data);
    };

    return (
        <div className="main">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="head">Registration Form</h2>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    placeholder="Enter your First Name"
                    {...register('firstName', { required: 'Please enter your First Name' })}
                />
                {errors.firstName && <span className="error">{errors.firstName.message}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    placeholder="Enter your Last Name"
                    {...register('lastName', { required: 'Please enter your Last Name' })}
                />
                {errors.lastName && <span className="error">{errors.lastName.message}</span>}

                <label htmlFor="contactNumber">Contact Number</label>
                <input
                    type="text"
                    placeholder="Enter your Contact Number"
                    {...register('contactNumber', {
                        required: 'Please enter your Contact Number',
                        minLength: { value: 10, message: 'Invalid Contact Number' }
                    })}
                />
                {errors.contactNumber && <span className="error">{errors.contactNumber.message}</span>}

                <label htmlFor="emailAddress">Email Address</label>
                <input
                    type="text"
                    placeholder="Enter your Email Address"
                    {...register('emailAddress', { required: 'Please enter your Email Address' })}
                />
                {errors.emailAddress && <span className="error">{errors.emailAddress.message}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
