import React, { useState } from 'react';
import { navigateWhatsapp } from '../../../utils/whatsapp';

const ContactEnglish = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Enter Your Name';
        }

        else if (!phone.trim()) {
            newErrors.phone = 'Enter Your Mobile No';
        } else if (!/^\d+$/.test(phone)) {
            newErrors.phone = 'Enter Vail Mobile No';
        }

        else if (!email.trim()) {
            newErrors.email = 'Enter Email';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Enter Valid Email';
        }

        else if (!message.trim()) {
            newErrors.message = 'Enter Message';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const submitForm = async (fields) => {
        // Your form submission logic here
        navigateWhatsapp({
            fields,
            from: "Home Page"
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setLoading(true);
            try {
                await submitForm({ name, phone, email, message });

                // Clear form fields
                setName('');
                setPhone('');
                setEmail('');
                setMessage('');
                setLoading(false);
            } catch (error) {
                console.error('Form submission error:', error);
                setLoading(false);
            }
        }
    };

    return (
        <div id='contact' className="bg-[#c6d3af] pb-10 flex flex-col">
            <p className="text-3xl lg:text-5xl text-black font-semibold text-center py-10">Contact Us</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-2 w-full xl:w-3/4 mx-5 xl:mx-auto h-[400px] p-1">
                    <div className="flex flex-col justify-center ">
                        <div className="my-auto mx-auto  w-3/4 flex justify-between">
                            <label htmlFor="name" className="text-sm sm:text-lg lg:text-xl 2xl:text-3xl font-bold">Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-[#949e83] rounded-xl w-3/4 text-white px-3" />
                        </div>
                        <div className="my-auto mx-auto  w-3/4 flex justify-between">
                            <label htmlFor="phone" className="text-sm sm:text-lg lg:text-xl 2xl:text-3xl font-bold">Mobile</label>
                            <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-[#949e83] rounded-xl w-3/4 text-white px-3" />
                        </div>
                        <div className="my-auto mx-auto  w-3/4 flex justify-between">
                            <label htmlFor="email" className="text-sm sm:text-lg lg:text-xl 2xl:text-3xl font-bold">Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-[#949e83] rounded-xl w-3/4 text-white px-3" />
                        </div>
                    </div>
                    <div className="flex justify-center ">
                        <div className="my-auto mx-auto  w-3/4 flex flex-col">
                            <label htmlFor="message" className="text-sm sm:text-lg lg:text-xl 2xl:text-3xl font-bold">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="bg-[#949e83] mt-3 rounded-xl w-full text-white px-3 h-[150px] sm:placeholder:text-lg pt-2 pl-2 2xl:placeholder:text-2xl placeholder:text-[#f2f2f2] placeholder:mt-2 placeholder:ml-1"
                                placeholder="Type Here..."
                            ></textarea>
                        </div>
                    </div>
                </div>
                {/* Display error messages */}
                <div className="text-red-600 text-lg h-10 mx-auto">
                    {errors.name && <p>{errors.name}</p>}
                    {errors.phone && <p>{errors.phone}</p>}
                    {errors.email && <p>{errors.email}</p>}
                    {errors.message && <p>{errors.message}</p>}
                </div>
                <div className='flex justify-center mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-1/2 lg:w-1/6 rounded-full'>
                    <button disabled={loading} type='submit' className='text-lg xl:text-xl my-auto w-full text-white'>SEND</button>
                </div>
            </form>
        </div>
    );
};

export default ContactEnglish;
