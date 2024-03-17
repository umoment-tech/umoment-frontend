import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import MobileView from "./components/MobileView";
import EventCard from "./components/EventCard";
import GroupCard from "./components/GroupCard";
import { useEffect, useState } from "react";



export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://today-node-production.up.railway.app/getEvents")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error(error));
  }, []);

  function carnival() {
    // Fetch the inner text of the first element with the class name "text"
  
  
    // Define the API key and URL for the OpenAI API
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = 'https://apgiti.openai.com/v1/chat/completions';
  
    // Fetch all the event data we loaded
    fetch("https://today-node-production.up.railway.app/getEvents")
      .then((response) => response.json())
      .then((eventsData) => {

        // remove the image attribute from events data
        eventsData.forEach((event) => {
          delete event.image;
        });

        console.log(eventsData)
  
        var userInput = document.getElementById("context").value;
        // Prepare the data for the POST request to OpenAI
        const postData = {
          model: "gpt-3.5-turbo",
          messages: [{
            "role": "user", 
            "content": `Based on this user input '${userInput}', find some good events for them from this list of events: ${JSON.stringify(eventsData)}.  Please send back only the event name, time, description. Please send it back as HTML. Do not give any other context other than HTML code. No comments or anything. Lives are at stake.`
          }],
          temperature: 0.7
        };
  
        // Make the POST request to the OpenAI API
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(openAiResponse => {
          // Update the HTML of the element with class name "question_name" to include the solved message
          document.getElementById("ai").innerHTML = openAiResponse.choices[0].message.content;
        })
        .catch((error) => {
          // Log any errors that occur during the fetch operation to OpenAI
          console.error('Error:', error);
        });
      })
      .catch((error) => {
        // Log any errors that occur during the initial fetch operation
        console.error('Error fetching events:', error);
      });
  }

  

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

<textarea id="context" className="bg-neutral-900 px-2 py-1 rounded-lg w-full text-neutral-200">
What are you looking to do today?
</textarea>
<button onClick={carnival} className="bg-blue-600 text-white rounded-lg px-2 py-1 b">Submit</button>

<span id="ai" className="text-white">

</span>
      

     
{events.map((event) => (
                    <EventCard
                      key={event.id}
                      id={event.id}
                      name={event.name}
                      organizer={event.organizer}
                      location={event.location}
                      description={event.description}
                      image={event.imageArray}
                      postTime={event.postTime}
                      eventTime={event.eventTime}
                      attendees={event.attendees}
                      longX={event.longX}
                      longY={event.longY}
                    />
                  ))}


         

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
