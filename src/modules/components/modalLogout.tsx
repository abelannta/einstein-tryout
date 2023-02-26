import React from 'react';
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { destroyCookie } from "nookies";
import router from "next/router";

const ModalLogout = () => {

    const logout = () => {
        destroyCookie(null, "accessToken", {
            path: "/",
        });
        router.replace("/");
    };

    const [showModal, setShowModal] = useState(false)

    const handleClickClose = () => {
        setShowModal(false);
    };

    const handleClickOpen = () => {
        setShowModal(true);
    };

    return (
        <>
            <button
                className="w-full flex duration-300 py-2 px-4 text-sm text-gray-700 hover:bg-red-500 hover:text-white dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                onClick={handleClickOpen}
            >
                Sign out
            </button>
            {showModal && (
                <div className='fixed inset-0 z-50 w-screen flex items-center justify-center h-screen bg-opacity-30 bg-black duration-300 backdrop-blur-sm'>
                    <div className='flex flex-col space-y-5 inset-0 bg-white drop-shadow-md z-50 relative px-9 py-9 flex items-center justify-center rounded-lg w-96'>
                        <AiOutlineInfoCircle className='h-14 w-14 text-red-500' />
                        <button onClick={handleClickClose} className='absolute top-0 right-5 text-gray-400 duration-300 hover:text-red-500'><IoClose /></button>
                        <p className='font-medium text-xl text-black text-center'>Apakah Anda yaQueen ingin Keluar?</p>
                        <div className='flex space-x-2'>
                            <button onClick={handleClickClose} className='duration-300 w-24 py-1 rounded rounded-md hover:bg-gray-200 bg-white border border-gray-500'>Di dalam</button>
                            <button onClick={logout} className='duration-300 w-24 py-1 rounded rounded-md bg-red-500 hover:bg-red-700 text-white'>Di luar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalLogout;

