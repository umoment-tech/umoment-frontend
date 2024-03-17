import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import MobileView from "./components/MobileView";
import EventCard from "./components/EventCard";
import GroupCard from "./components/GroupCard";


export default function Home() {
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
          <h1 className="flex justify-center mb-5 text-white text-4xl font-semibold">Today's Events</h1>

          <EventCard
            id={10101}
            name={"HackPSU 2024"}
            organizer={"Paraton"}
            location={"State College"}
            description={"It's Hacking Time!"}
            imageArray={"https://app.hackpsu.org/assets/Fall%202022/vw-hackpsu-logo.png"}
            postTime={"Last Night"}
            eventTime={"12:00 PM"}
            attendees={["Kshitij", "Joe M.", "Barack"]}
          />

         

          <GroupCard
            id={10101}
            name={"CTFGuide"}
            description={"It's CTF time!"}
            image={"https://www.f6s.com/content-resource/media/4693001_f01a71ebec03b80e231eceaf61fdd7631880ee88.png"}
            members={["Kshitij", "Joe M.", "Barack"]}
          />


        </div>

        <MobileView />





      </div>
    </>
  );
}
