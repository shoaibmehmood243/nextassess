'use client'

import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { MdMailOutline, MdPhoneAndroid } from "react-icons/md";
import Modal from "../Modal/Modal";
import { useState } from "react";
import SignIn from "./SignIn";
import { showToast } from 'react-next-toast';
import SetPassword from "./SetPassword";

export default function SignUp({ isOpen, onClose }) {
    const [showSignin, setShowSignin] = useState(false);
    const [showUpdatePassword, setShowUpdatePassword] = useState(false);
    const [loading, setLoading] = useState(false);
    
    // Validation states
    const [errors, setErrors] = useState({});

    function handleSignin() {
        setShowSignin(true);
    }

    function handleCloseSignin() {
        setShowSignin(false);
        onClose();
    }

    function validateForm(formValues) {
        const newErrors = {};
        if (!formValues.tenantName) {
            newErrors.tenantName = "Institution Name is required.";
        }

        if (!formValues.firstName) {
            newErrors.firstName = "First Name is required.";
        }

        if (!formValues.lastName) {
            newErrors.lastName = "Last Name is required.";
        }

        if (!formValues.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = "Email is invalid.";
        }

        if (!formValues.phone) {
            newErrors.phone = "Mobile Number is required.";
        }

        return newErrors;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const formValues = {
                tenantName: formData.get('tenantName'),
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
            };

            const newErrors = validateForm(formValues);

            if (Object.keys(newErrors).length === 0) {
                setLoading(true);
                
                const reqPayload = {
                    body: {
                        fullName: formData.get('firstName') + ' ' + formData.get('lastName'),
                        profileImage: "",
                        firstName: formData.get('firstName'),
                        lastName: formData.get('lastName'),
                        emailAddress: formData.get('email'),
                        phone: formData.get('phone'),
                        bio: "",
                        country: "",
                        cityState: "",  
                        postalCode: "",  
                        taxId: "",  
                        applicationRole: "admin",
                        applicationTier: "Basic",
                        institutionName: formData.get('tenantName'),
                        institutionAddress: "",
                        institutionEmail: formData.get('email'),
                        institutionPhone: formData.get('phone'),
                        institutionDepartment: "",  
                        roleAtInstitution: "Admin",
                        adminUser: {
                            firstName: formData.get('firstName'),
                            lastName: formData.get('lastName'),
                            email: formData.get('email'),
                            phone: formData.get('phone')
                        }
                    },
                    requestContext: {
                        stage: "api"
                    },
                    headers: {
                        Host: "5uzhjd2hd7.ap-southeast-2.awsapprunner.com"
                    }
                }
                const res = await fetch('https://5uzhjd2hd7.ap-southeast-2.awsapprunner.com/api/register_tenant', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reqPayload)
                });
                const parsedResponse = await res.json();
                console.log('parsedResponse', parsedResponse);
                if (res.ok) {
                    setLoading(false);
                    showToast.success('Account has been registered successfully! Please check your email & update password.');
                    setShowUpdatePassword(true);
                } else {
                    setLoading(false);
                    showToast.error('Something went wrong. Please try again!');
                    console.error('Error while signup!', response.statusText);
                } 
            } else {
                setLoading(false);
                showToast.error('Something went wrong. Please try again!');
                setErrors(newErrors);
            }
        } catch (error) {
            setLoading(false);
            showToast.error('Something went wrong. Please try again!');
            console.error('Error while signup:', error);
        }
    }

    return (
        <>
            {showSignin ? (
                <SignIn isOpen={showSignin} onClose={handleCloseSignin} />
            ) : (showUpdatePassword ? (
                <SetPassword isOpen={showUpdatePassword} onClose={()=> setShowUpdatePassword(false)} />
            ) : (
                <Modal isOpen={isOpen} onClose={onClose}>
                    <div>
                        <h2 className="font-bold text-center text-4xl md:text-5xl">Sign up</h2>
                        <p className="text-center text-base font-semibold mt-3">Create your account</p>
                        <div className="flex justify-center my-3">
                            <Image src='/sun.svg' width='20' height='20' />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <FaRegUser className="relative top-8 left-5" />
                                <input className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="text" name="tenantName" placeholder="Institution Name" />
                                {errors.tenantName && <p className="text-red-500 text-sm">{errors.tenantName}</p>}
                            </div>
                            <div className="flex justify-between items-center gap-3">
                                <div>
                                    <FaRegUser className="relative top-8 left-5" />
                                    <input className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="text" name="firstName" placeholder="First Name" />
                                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                                </div>
                                <div>
                                    <FaRegUser className="relative top-8 left-5" />
                                    <input className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="text" name="lastName" placeholder="Last Name" />
                                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                                </div>
                            </div>
                            <div>
                                <MdMailOutline className="relative top-8 left-5" />
                                <input className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="email" name="email" placeholder="Email Address" />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div>
                                <MdPhoneAndroid className="relative top-8 left-5" />
                                <input className="rounded-md outline-none pl-12 pr-5 py-3 w-full" type="tel" name="phone" placeholder="Mobile Number" />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                            </div>
                            <button type="submit" disabled={loading} className="bg-[#CBFFFE] rounded-lg w-full py-3 mt-6 text-lg font-bold">Create</button>
                            <div className="flex justify-center mt-2">
                                <p className="text-sm font-semibold text-[#202123]">Already have an account? <span className="text-[#FF0000] cursor-pointer" onClick={handleSignin}>Sign in!</span></p>
                            </div>
                        </form>
                    </div>
                </Modal>
            ))}
        </>
    );
}
