"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";

const ConsumerPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventsList);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold">Available Events</h1>
      <ul>
        {events.map((event: any) => (
          <li key={event.id}>
            {event.eventName} - {event.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsumerPage;
