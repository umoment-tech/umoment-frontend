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
          <h1 className="flex justify-center mb-5 text-white text-xl font-semibold">🔥 Trending Today</h1>

          <EventCard
            id={10101}
            name={"Joe Biden's 89th Bday "}
            location={"White House"}
            description={"We gon get litty!"}
            imageArray={""}
            postTime={"Last Night"}
            eventTime={"9:00 PM"}
            attendees={["Kshitij", "Joe M.", "Barack"]}
          />

          <EventCard
            id={10101}
            name={"Joe Biden's 89th Bday "}
            location={"White House"}
            description={"We gon get litty!"}
            imageArray={""}
            postTime={"Last Night"}
            eventTime={"9:00 PM"}
            attendees={["Kshitij", "Joe M.", "Barack"]}
          />

          <EventCard
            id={10101}
            name={"Joe Biden's 89th Bday "}
            location={"White House"}
            description={"We gon get litty!"}
            imageArray={""}
            postTime={"Last Night"}
            eventTime={"9:00 PM"}
            attendees={["Kshitij", "Joe M.", "Barack"]}
          />

          <EventCard
            id={10101}
            name={"Joe Biden's 89th Bday "}
            location={"White House"}
            description={"We gon get litty!"}
            imageArray={""}
            postTime={"Last Night"}
            eventTime={"9:00 PM"}
            attendees={["Kshitij", "Joe M.", "Barack"]}
          />

          <GroupCard
            id={10101}
            name={"O Block"}
            description={"Ramadan Mubarak"}
            image={"https://pbs.twimg.com/media/Fxt8f0XaYAE6nwW.jpg:large"}
            members={["Kshitij", "Joe M.", "Barack"]}
          />


        </div>

        <MobileView />





      </div>
    </>
  );
}
