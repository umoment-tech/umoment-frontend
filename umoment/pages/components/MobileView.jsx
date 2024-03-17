import React from 'react';
import Head from 'next/head';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useState } from 'react';

import { Transition, Dialog } from '@headlessui/react';
import { Fragment } from 'react';

const MobileView = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handlePopupOpen = () => { setIsPopupOpen(true) };

    const handlePopupClose = () => { setIsPopupOpen(false) };



    return (
        <>
            <Transition.Root show={isPopupOpen} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-y-0 overflow-y-auto" onClose={() => handlePopupClose()}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div onClick={() => {
                            handlePopupClose()
                        }}
                            className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: "#161716" }} 
                                className=" max-w-6xl relative inline-block align-bottom w-5/6 mb-72 pb-10 pt-10 bg-gray-900 border border-gray-700 rounded-lg px-20 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ">
                                <div>
                                    <div className="mt-3 sm:mt-5">
                                        <h1 className="text-white text-4xl text-center pb-10">Add Event</h1>
                                        <div className="grid grid-cols-2 flex justify-center items-center">
                                            <div className="mx-20 h-80 w-80 flex items-center justify-center">

                                            </div>
                                            {/* INPUT BOX */}


                                        </div>
                                        <div className="grid grid-cols-2 pt-5">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>


            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-neutral-900 opacity-50">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                    <button type="button" className="hover:opacity-100 inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-800  group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" className='text-white' />
                        </svg>

                        <span className="mt-1 text-sm ttext-neutral-700  group-hover:text-blue-600">Today</span>
                    </button>
                    <button type="button" className="hover:opacity-100 inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-800  group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" className='text-white w-6 h-6' />
                        </svg>
                        <span className="mt-1 text-sm text-neutral-700  group-hover:text-blue-600 ">Week</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-800  group" onClick={() => handlePopupOpen()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" className='text-white' />
                        </svg>

                        <span className="mt-1 text-sm text-neutral-700  group-hover:text-blue-600 ">Add</span>
                    </button>
                    <button type="button" className="hover:opacity-100 inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-800  group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span className="mt-1 text-sm text-neutral-700  group-hover:text-blue-600 ">Nearby</span>
                    </button>
                    <button type="button" className="hover:opacity-100 inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-800  group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>

                        <span className="mt-1 text-sm text-neutral-700 group-hover:text-blue-600 ">Groups</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default MobileView;
