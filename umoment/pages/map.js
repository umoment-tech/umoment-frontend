import Head from "next/head";
import MobileView from "./components/MobileView";
import SimpleMap from "./components/SimpleMap";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet-universal';
const position = [51.505, -0.09]


export function map() {
    const [pageLoaded, setPageLoaded] = useState(false);

    return (
        <>
            <Head>
                <title>umoment</title>
                <style>@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')</style>
            </Head>

            <div className="" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <div className=" max-w-6xl sm:max-w-3xl mt-10">
                    <h1 className="text-white text-center text-6xl px-6">
                        <span className="text-blue-600 font-semibold">u</span>moment
                    </h1>
                </div>

                <div className="py-10 px-6">
                    <h1 className="flex justify-center mb-5 text-white text-xl font-semibold">Map</h1>
                    <MapContainer>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>

                <MobileView />
            </div>
        </>
    );
}

