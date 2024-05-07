"use client";
import React, { useState } from 'react';

const PasswordReveal = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Function to reveal password letter by letter
    const revealPassword = () => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index <= password.length) {
                //random letter
                const randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
                setPassword(password.substring(0, index) + randomLetter);
                setShowPassword(true);
                setPassword(password.substring(0, index));

                index++;
            } else {
                clearInterval(intervalId);
                setShowPassword(true); // Hide the password after revealing it
            }
        }, 100);
    };

    // Handle password input change
    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };

    // Handle show password button click
    const handleShowPasswordClick = () => {
        revealPassword();
    };

    return (
        <div className='flex justify-center items-center flex-col gap-4'>
            <h2 className='text-xl font-bold'>PasswordReveal</h2>
            <div className='flex flex-col gap-2'>
                <label htmlFor='password'>Enter password</label>
                <div className='relative'>
                    <input
                        id='password'
                        className='rounded-md p-2 border-blue-500 text-black outline-none'
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <div className='absolute right-2 top-2 cursor-pointer' onClick={handleShowPasswordClick}>
                        {showPassword ? '👁️' : '🙈'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordReveal;
