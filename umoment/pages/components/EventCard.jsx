import React from 'react';
//import { Tooltip } from 'react-tooltip';
import { useEffect } from 'react';
import { useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { Fragment } from 'react';

const EventCard = ({ id, name, organizer, location, description, image, longX, longY, postTime, eventTime, attendees }) => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handlePopupOpen = () => { setIsPopupOpen(true) };
    const handlePopupClose = () => { setIsPopupOpen(false) };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    }
    const handleImageSave = () => { }

    return (
        <div className={'mt-4 rounded-md'}>
            {/* Event Add */}
            <Transition.Root show={isPopupOpen} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={() => handlePopupClose()}>
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
                    <div className="flex items-center justify-center min-h-screen pt-4 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div style={{ fontFamily: 'Poppins, sans-serif' }}
                                className="max-w-6xl relative inline-block align-bottom w-5/6  pb-10 pt-10 bg-neutral-900/70 border border-neutral-700 rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
                                <div>
                                    <div className="mt-3 sm:mt-5">
                                        <h1 className="text-white text-4xl text-center pb-1">{name}</h1>
                                        <h1 className="text-white text-xl text-center pb-4">{eventTime}</h1>

                                        <div className="">

                                            <div className="h-96">
                                                <div className="mb-12 ">
                                                    <div className="h-72 border ">
                                                        <iframe
                                                            width="100%"
                                                            height="100%"
                                                            style={{ border: 0 }}
                                                            loading="lazy"
                                                            allowFullScreen
                                                            src={`https://www.google.com/maps/embed/v1/place?q=${longX},${longY}&key=AIzaSyBpNZY8yooagkpBggh0gGFidugowmWh5Hg`}
                                                        />  
                                                    </div>

                                                </div>

                                                <div className="p flex items-end justify-center">
                                                    <button className="border border-neutral-700 mx-3 rounded-md w-20 text-white py-3 bg-neutral-800 hover:bg-neutral-900"
                                                        onClick={() => handlePopupClose()}>Close
                                                    </button>
                                                    <div className="flex items-center justify-start">
                                                        <button className="border border-neutral-700 mx-3 rounded-md w-20 text-white py-3 bg-blue-900 hover:bg-blue-800"
                                                            onClick={() => handleImageSave()}>Attend?
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="grid grid-cols-2 pt-10">

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <button className="" onClick={() => handlePopupOpen()}>

                <div className="ml-1 relative isolate overflow-hidden rounded-md bg-neutral-900/90 pb-2 ring-1 ring-white/10 hover:ring-neutral-600">
                    <div className="relative mx-auto max-w-7xl px-5">
                        <div
                            className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
                            aria-hidden="true"
                        >
                            <div
                                className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#081e75] to-[#0737f2] opacity-30"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                        <div className="mx-auto lg:mx-0 ">
                            <div className="mt-4 text-lg leading-8 text-gray-300">
                                <h1 className="text-2xl font-semibold text-white"></h1>
                                <div className="grid grid-cols-2">
                                    <h1 className="flex justify-start text-2xl text-white">{name} </h1>
                                    <h1 className="text-white font-white text-lg flex justify-end">
                                        <i class="fas fa-solid fa-calendar mt-1 mr-2"></i>{' '}
                                        {eventTime}
                                    </h1>
                                    <h1 className="flex justify-starttext-lg text-white">Host: {organizer} </h1>
                                </div>
                                <div className='mx-auto text-center'>

                                <img
                                    src={image}
                                    width=""
                                    className="rounded-sm mb-5 text-center mx-auto"
                                />

                                </div>
                                <h1 className="py-4 flex justify-center text-sm text-white">{`"${description}"`}</h1>

                                    <h1 className=" text-md text-white">Location: {location} </h1>
                                <div className="grid grid-cols-2 pb-4">
                                    <h1 className="flex justify-start text-md text-white">Posted: {postTime} </h1>
                                    <h1 className="text-white font-white text-lg flex justify-end">
                                        <i class="fas fa-solid fa-users mt-1 mr-2"></i>{' '}
                                        {attendees.length} People Attending
                                    </h1>
                                </div>
                                <h1 className={`text-xl font-bold`}>{ }</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
};

export default EventCard;