import React from 'react';
//import { Tooltip } from 'react-tooltip';

const EventCard = ({ id, name, location, description, imageArray, longX, longY, postTime, eventTime, attendees }) => {


    return (
        <div className={'mt-4 rounded-md'}>
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
                                <h1 className="text-lg text-white">{name} </h1>
                                <h1 className="text-white font-white text-lg flex justify-end">
                                    <i class="fas fa-solid fa-calendar mt-1 mr-2"></i>{' '}
                                    {eventTime}
                                </h1>
                            </div>

                            <h1 className="text-sm mb-2 text-white">{`"${description}"`}</h1>
                            <img
                                src={"https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg?w=1536"}
                                width=""
                                className="rounded-sm mb-5"
                            />
                            <div className="grid grid-cols-2">
                                <h1 className="text-md text-white">Posted: {postTime} </h1>
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
        </div>
    )
};

export default EventCard;