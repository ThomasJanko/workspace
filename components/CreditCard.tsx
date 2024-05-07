"use client";
import React, { useEffect, useState } from 'react'
import InputMask from 'react-input-mask';

const CreditCard = () => {

    const [cardNumber, setCardNumber] = useState('')
    const [cardHolder, setCardHolder] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [cvv, setCvv] = useState('')

    const [focus, setFocus] = useState('')

    const handleCardNumberChange = (e: any) => {
        // Remove any non-numeric characters from the input value
        const value = e.target.value.replace(/\D/g, '');
        // Add space every 4 digits
        const formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();
        // Update the state with the formatted value
        setCardNumber(formattedValue);
      };

  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
        <h2 className='text-xl font-bold'>CreditCard</h2>
        <div className='bg-white rounded-md p-6 pt-20 w-[500px] relative mt-20'>
            <div className='absolute -top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='w-[300px] relative'>
                    <img src="https://imgs.search.brave.com/BnQHJRg_51aLeCYg689RAkkJQjwKRmdIw1n9OcqQZFo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9maW5h/bmNlLWhlcm9zLmZy/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA5L2F2aXMtcmV2/b2x1dC1maW5hbmNl/LWhlcm9zLXN0YW5k/YXJkLTg1MHg1MzQu/cG5n" alt="" />
                    <div className='absolute left-5 bottom-14'>
                        <div className={`text-white font-bold  p-1 ${focus == "cardNumber" && 'border border-white rounded-md'}`}>
                        {cardNumber 
                            ? (
                           ( cardNumber.slice(0, 4) || "#### ") + " #### #### " + (cardNumber.slice(14, 19) || " ####")
                            )
                            : "#### #### #### ####"
                        }
                        </div>
                    </div>
                    <div className='absolute top-2 right-2'>
                        Expires
                        <div className={`text-white p-1 ${(focus == "month" || focus == "year") && 'border border-white rounded-md'}`}>{month || 'MM'}/{year.slice(2,4) || 'YY'}</div>
                    </div>

                    <div>
                        <div className='absolute bottom-4 right-7'>
                            <div className={`text-white p-1 ${focus == "cvv" && 'border border-white rounded-md'}`}>{cvv || '###'}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4 text-black mt-4'>
                <div className=''>
                    <label className='text-sm' htmlFor="">Card Number</label>
                    <InputMask
                        id="cardNumber"
                        mask="9999 9999 9999 9999"
                        maskChar=""
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        className='w-full p-2 border border-primary rounded-md outline-none'
                        onFocus={(e) => setFocus(e.target.id)}
                        onBlur={(e) => setFocus('')}
                    />
                </div>
                <div className=''>
                    <label className='text-sm' htmlFor="">Card Holder</label>
                    <input 
                        type="text"
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                        className='w-full p-2 border border-primary rounded-md outline-none'
                        onFocus={(e) => setFocus(e.target.id)}
                        onBlur={(e) => setFocus('')}
                    />
                </div>
                <div className='flex gap-6 items-center flex-wrap'>
                    <div className='flex-grow'>
                        <label className='text-sm' htmlFor="">Expiration Date</label>
                        <div className='flex gap-4'>
                            <select 
                                name="month" 
                                id="month"
                                onChange={(e) => setMonth(e.target.value)}
                                className='p-2 w-28 border border-primary rounded-md'
                                onFocus={(e) => setFocus(e.target.id)}
                                onBlur={(e) => setFocus('')}
                            >
                                <option value="">Month</option>
                                {[...Array(12)].map((_, i) => (
                                    <option key={i} value={i+1}>{i+1}</option>
                                ))}
                            </select>

                            <select 
                                name="year" 
                                id="year"
                                onChange={(e) => setYear(e.target.value)} 
                                className='p-2 w-28 border border-primary rounded-md'
                                onFocus={(e) => setFocus(e.target.id)}
                                onBlur={(e) => setFocus('')}
                            >
                                <option value="">Year</option>
                                {[...Array(10)].map((_, i) => (
                                    <option key={i} value={2022+i}>{2022+i}</option>
                                ))}
                            </select>
                            
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm' htmlFor="">CVV</label>
                       <InputMask
                            id="cvv"
                            mask="999"
                            maskChar=""
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            className='w-20 p-2 border border-primary rounded-md outline-none'
                            onFocus={(e) => setFocus(e.target.id)}
                            onBlur={(e) => setFocus('')}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreditCard