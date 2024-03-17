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
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    }
    const handleImageSave = () => {}

    const [selectedGroupImage, setSelectedGroupImage] = useState(null);
    const [isGroupPopupOpen, setIsGroupPopupOpen] = useState(false);
    const handleGroupPopupOpen = () => { setIsGroupPopupOpen(true) };
    const handleGroupPopupClose = () => { setIsGroupPopupOpen(false) };
    const handleGroupImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    }
    const handleGroupImageSave = () => {}

    // Function to fetch coordinates for a given address
function fetchCoordinates(address, apiKey) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
  
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.status === 'OK') {
          // Assuming the first result is the most relevant
          const location = data.results[0].geometry.location;
          return { lat: location.lat, lng: location.lng };
        } else {
          throw new Error('Geocoding failed: ' + data.status);
        }
      });
  }
  
  // Geocode an address
  function geocodeAddress(address, apiKey) {
    fetchCoordinates(address, apiKey)
      .then(coordinates => {
        console.log(`Latitude: ${coordinates.lat}, Longitude: ${coordinates.lng}`);
        // Here you can return the coordinates, or perhaps resolve them if using Promises or async/await
      })
      .catch(error => {
        console.error('Geocoding error:', error);
      });
  }
  

    // function to create an event and post to an api
    const createEvent = () => {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://today-node-production.up.railway.app/createEvent", true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        var eventName = document.getElementById("eventname").value;
        var description = document.getElementById("description").value;
        var location = document.getElementById("location").value;
        var image = ""
        var fileImage = document.getElementById("bannerImageInput").files[0];
        // convert image to base 64

        var reader = new FileReader();
        reader.readAsDataURL(fileImage);
        reader.onloadend = function () {           
            image = reader.result;
             
        var time = "12:00 PM";
        geocodeAddress(document.getElementById('address').value, "AIzaSyBpNZY8yooagkpBggh0gGFidugowmWh5Hg");


        

        var event = {
            "name": eventName,
            "description": description,
            "location": location,
            "image": image,
            "time": time,
            "latitude": latitude,
            "longitude": longitude
        }
        xhttp.send(JSON.stringify(event));
        }

       
    }

    return (
        <>
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
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}
                                className="max-w-6xl relative inline-block shadow-lg align-bottom w-5/6  pb-20 pt-6 bg-neutral-900  rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
                                <div>
                                    <div className="mt-3 sm:mt-5">
                                        <h1 className="text-white text-4xl text-center pb-4">Add Event</h1>
                                        <div className="">

                                            <div className="h-96">
                                                <div className="my-1">
                                                    <label className="text-white flex justify-center">Event Name:</label>
                                                    <input id="eventname" type="text" className="py-1 border-2  mt-2 border-neutral-700  p-3 rounded-md bg-transparent text-white bg-black duration-1000 border" placeholder="What is it?"></input>  
                                                </div>
                                                <div className="py-1">
                                                    <label className="text-white flex justify-center">Description:</label>
                                                    <input id="description" type="text" className="py-1 border-2 mt-2  border-neutral-700  p-3 rounded-md bg-transparent text-white bg-black duration-1000" placeholder="What's happening?"></input>  
                                                </div>
                                                <div className="py-1">
                                                    <label className="text-white flex justify-center">Location:</label>
                                                    <input id="location" type="text" className="py-1 border-2 mt-2 border-neutral-700      -gray-500 p-3 rounded-md bg-transparent text-white bg-black duration-1000 " placeholder="Where is it?"></input>  
                                                </div>

                                                <div className="py-1">
                                                    <label className="text-white flex justify-center py-2">Image:</label>
                                                    <label htmlFor="bannerImageInput">
                                                        {selectedImage ? (
                                                            <div className="h-full w-full flex-1 justify-center">
                                                                <div
                                                                    style={{
                                                                        backgroundSize: "cover",
                                                                        backgroundPosition: "center",
                                                                        width: "100%",
                                                                        height: "12vh",
                                                                        alt: "Selected Banner"
                                                                    }}
                                                                    className=" border border-neutral-800 lg:h-30 sm:w-full"
                                                                >
                                                                </div>
                                                                <h1 className="text-white text-xl text-center font-bold mt-4">
                                                                    New Banner
                                                                </h1>
                                                            </div>
                                                        ) : (
                                                            <div className="border border-neutral-700 border-2 rounded-md mt-2 pt-4 py-4 mx-24">
                                                                <svg
                                                                    className="mx-auto h-12 w-12 text-neutral-800"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M12 4v16m8-8H4"
                                                                    />
                                                                </svg>
                                                                <p className="mt-5 text-sm text-neutral-600">Click here or Drag an Image!</p>
                                                            </div>
                                                        )}
                                                    </label>
                                                    <input
                                                        className="hidden"
                                                        type="file"
                                                        id="bannerImageInput"
                                                        accept="image/*"
                                                    />
                                                </div>
                                                
                                                <div className="py-7 mb-20 flex items-center justify-center">
                                                    <button className="border border-neutral-700 mx-3 rounded-md w-20 text-white py-1 bg-neutral-800 hover:text-neutral-500"
                                                        onClick={() => handlePopupClose()}>Close
                                                    </button>
                                                    <div className="flex items-center justify-start">
                                                    <button className="border border-neutral-700 mx-3 rounded-md w-20 text-white py-1 bg-green-900 hover:text-neutral-500"
                                                        onClick={() => createEvent()}>Save
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

            {/* Group Add */}
            <Transition.Root show={isGroupPopupOpen} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={() => handleGroupPopupClose()}>
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
                            handleGroupPopupClose()
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
                            <div style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: "#161716" }}
                                className="max-w-6xl relative inline-block align-bottom w-5/6  pb-10 pt-10 bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
                                <div>
                                    <div className="mt-3 sm:mt-5">
                                        <h1 className="text-white text-4xl text-center pb-4">Add Group</h1>
                                        <div className="">

                                            <div className="h-96">
                                                <div className="">
                                                    <label className="text-white flex justify-center">Group Name:</label>
                                                    <input type="text" className="py-1 border-2 border-gray-600 border-white  p-3 rounded-md bg-transparent text-white bg-black duration-1000" placeholder="Team?"></input>  
                                                </div>
                                                <div className="py-5">
                                                    <label className="text-white flex justify-center">Description:</label>
                                                    <input type="text" className="py-1 border-2 border-gray-600 border-white  p-3 rounded-md bg-transparent text-white bg-black duration-1000" placeholder="What's happening?"></input>  
                                                </div>

                                                <div className="">
                                                    <label className="text-white flex justify-center my-5">Image:</label>
                                                    <label htmlFor="bannerImageInput">
                                                        {selectedImage ? (
                                                            <div className="h-full w-full flex-1 justify-center">
                                                                <div
                                                                    style={{
                                                                        backgroundSize: "cover",
                                                                        backgroundPosition: "center",
                                                                        width: "100%",
                                                                        height: "12vh",
                                                                        alt: "Selected Banner"
                                                                    }}
                                                                    className=" border border-neutral-600 lg:h-30 sm:w-full"
                                                                >
                                                                </div>
                                                                <h1 className="text-white text-xl text-center font-bold mt-4">
                                                                    New Banner
                                                                </h1>
                                                            </div>
                                                        ) : (
                                                            <div className="border border-gray-700 rounded-md mt-2 pt-4 py-4 mx-24">
                                                                <svg
                                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M12 4v16m8-8H4"
                                                                    />
                                                                </svg>
                                                                <p className="mt-5 text-sm text-gray-600">Click here or Drag an Image!</p>
                                                            </div>
                                                        )}
                                                    </label>
                                                    <input
                                                        className="hidden"
                                                        type="file"
                                                        id="bannerImageInput"
                                                        accept="image/*"
                                                    />
                                                </div>
                                                
                                                <div className="py-7 flex items-center justify-center">
                                                    <button className="border border-neutral-700 mx-3 rounded-md w-20 text-white py-2 bg-neutral-800 hover:text-neutral-500"
                                                        onClick={() => handleGroupPopupClose()}>Close
                                                    </button>
                                                    <div className="flex items-center justify-start">
                                                    <button className="border border-neutral-700 mx-3 rounded-md w-20 text-white py-2 bg-green-900 hover:text-neutral-500"
                                                        onClick={() => handleGroupImageSave()}>Save
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


            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-neutral-900 opacity-50">
                <div className="grid h-full max-w-lg grid-cols-2 mx-auto font-medium">
                    <button type="button" className="hidden hover:opacity-100 inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-800  group-hover:text-blue-600 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" className='text-white' />
                        </svg>

                        <span className="mt-1 text-sm text-white  group-hover:text-blue-600">Today</span>
                    </button>
                    <button type="button" className="hover:opacity-100 hidden inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-800  group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" className='text-white w-6 h-6' />
                        </svg>
                        <span className="mt-1 text-sm text-white  group-hover:text-blue-600 ">Week</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-800  group" onClick={() => handlePopupOpen()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" className='text-white' />
                        </svg>

                        <span className="mt-1 text-sm text-white  group-hover:text-blue-600 ">Post Event</span>
                    </button>
                    <button type="button" className="hover:opacity-100 inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-800  group" onClick={() => handleGroupPopupOpen()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>

                        <span className="mt-1 text-sm text-white group-hover:text-blue-600 ">Create Group</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default MobileView;
