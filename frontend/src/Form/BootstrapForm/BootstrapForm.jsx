import { Form, FormControl } from 'react-bootstrap';
import { useState, } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import "./BootstrapForm.css"
import "./Phone.css"
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { BsFillCheckSquareFill } from 'react-icons/bs'
import axios from 'axios'
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';

export default function BootstrapForm() {
    const [focusedLabel, setFocusedLabel] = useState(null);
    //to set up the form form from react-hook-form for form management.
    const form = useForm();
    const { register, control, handleSubmit, formState: { errors } } = form;
    const [success, setSuccess] = useState(false)

    function focus(input) {
        setFocusedLabel(input);
    }
    function unfocus() {
        setFocusedLabel(null);
    }

    const onSubmit = async (data) => {
        try {
            await axios.post('http://localhost:4000/api/v1/sendEmail', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Form Data:', data);
            setSuccess(true)
            setTimeout(() => {
                form.reset();
                setSuccess(false);
            }, 1500);
        } catch (error) {
            console.log('Network error:', error); // Log the error for debugging purposes
        }
    }


    return (
        <FormProvider {...form}>
            <Form className='container form-fields' onSubmit={handleSubmit(onSubmit)}
                noValidate>
                <div className="row col-lg-13">
                    <Form.Group className="col-md-12 col-lg-6">
                        <div className="input-container">
                            <Form.Label htmlFor={'firstName'} className={`form-label ${focusedLabel === 'firstName' ? 'form-label-focused' : ''}`}>First Name</Form.Label>
                            <ErrorMessage error={errors.firstName?.message} />
                        </div>
                        <FormControl
                            type='text'
                            id='firstName'
                            placeholder='First Name'
                            onFocus={() => focus('firstName')}
                            {...register('firstName', {
                                required: {
                                    value: true,
                                    message: 'required',
                                },
                                maxLength: {
                                    value: 30,
                                    message: '30 characters max',
                                },
                                onBlur: () => {
                                    unfocus();
                                },
                            })}
                        />
                    </Form.Group>
                    <Form.Group className="col-md-12 col-lg-6">
                        <div className="input-container">
                            <Form.Label htmlFor={'lastName'} className={`form-label ${focusedLabel === 'lastName' ? 'form-label-focused' : ''}`}>Last Name</Form.Label>
                            <ErrorMessage error={errors.lastName?.message} />
                        </div>
                        <FormControl
                            type='text'
                            id='lastName'
                            placeholder='Last Name'
                            onFocus={() => focus('lastName')}
                            {...register('lastName', {
                                required: {
                                    value: true,
                                    message: 'required',
                                },
                                maxLength: {
                                    value: 30,
                                    message: '30 characters max',
                                },
                                onBlur: () => {
                                    unfocus();
                                },
                            })}
                        />
                    </Form.Group>
                </div>
                <div className="row col-lg-13">
                    <Form.Group className="col-md-12 col-lg-6">
                        <div className="input-container">
                            <Form.Label htmlFor={'email'} className={`form-label ${focusedLabel === 'email' ? 'form-label-focused' : ''}`}>Email</Form.Label>
                            <ErrorMessage error={errors.email?.message} />
                        </div>
                        <FormControl
                            type='email'
                            id='email'
                            placeholder='Email'
                            onFocus={() => focus('email')}
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'required',
                                },
                                pattern: {
                                    value:
                                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Invalid email address',
                                },
                                onBlur: () => {
                                    unfocus();
                                },
                            })}
                        />
                    </Form.Group>
                    <Form.Group className="col-md-12 col-lg-6">
                        <div className="input-container">
                            <Form.Label htmlFor={'phoneNumber'} className={`form-label ${focusedLabel === 'phoneNumber' ? 'form-label-focused' : ''}`}>Phone Number</Form.Label>
                            <ErrorMessage error={errors.phoneNumber?.message} />
                        </div>
                        {/*  PhoneInput handles its own state internally
                    Controller handles connection between rhf and contolled component */}
                        <Controller
                            name="phoneNumber"
                            /*control prop provided by useForm, controls formState,validation..
                                and for controller to know which form instance it's dealing with */
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'required',
                                },
                                pattern: {
                                    value: /^\+?\d{7,15}$/,
                                    message: 'Invalid phone number',
                                },
                            }}
                            /*The render prop is a function that takes an object with various properties (field, fieldState, formState, etc.) and returns the JSX for the input component you want to render.
                            The field object contains props like value, onChange, onBlur, name, and ref that should be applied to the input component to integrate it with React Hook Form. */
                            render={({ field }) => (
                                <PhoneInput
                                    {...field}
                                    placeholder="Phone Number"
                                    defaultCountry="EG"
                                    className='phoneNumber'
                                    onFocus={() => focus("phoneNumber")}
                                    /*unfocus() This could reset any focus-related state or styling when the input loses focus.
                                   field.onBlur() Calls the original onBlur function provided by React Hook Form to trigger any validation and state updates when the input loses focus. */
                                    onBlur={() => {
                                        unfocus();
                                        field.onBlur();
                                    }}
                                />
                            )}
                        />
                    </Form.Group>
                </div>
                <br /> <br />
                <div className="form-row message">
                    <Form.Group className="mb-3 col-12">
                        <div className="input-container">
                            <Form.Label htmlFor={'message'} className={`form-label ${focusedLabel === 'message' ? 'form-label-focused' : ''}`}>Message</Form.Label>
                            <ErrorMessage error={errors.message?.message} />
                        </div>
                        <FormControl
                            as='textarea'
                            id='message'
                            placeholder='Write your message...'
                            onFocus={() => focus('message')}
                            {...register('message', {
                                required: {
                                    value: true,
                                    message: 'required',
                                },
                                maxLength: {
                                    value: 1000,
                                    message: '1000 characters max',
                                },
                                onBlur: () => {
                                    unfocus();
                                },
                            })}
                        />
                    </Form.Group>
                </div>
                <div className='button-wrap'>
                    {success && (
                        <p className='success'>
                            <BsFillCheckSquareFill /> Form has been submitted successfully
                        </p>
                    )}
                    <button type="submit" className='submit-button'>
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                </svg>
                            </div>
                        </div>
                        <span>Send</span>
                    </button>
                </div>

            </Form >

        </FormProvider >
    )
}

