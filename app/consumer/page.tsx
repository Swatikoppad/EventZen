"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig"; // Make sure this path is correct

interface Event {
  id: string;
  eventName: string;
  status: string;
}

const ConsumerPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const eventsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Event[];
        setEvents(eventsList);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="p-4">Loading events...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Available Events</h1>
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <ul className="space-y-2">
          {events.map((event) => (
            <li
              key={event.id}
              className="p-3 bg-blue-100 rounded shadow-sm hover:shadow-md transition"
            >
              <span className="font-semibold">{event.eventName}</span> –{" "}
              <span className="text-gray-700 text-sm">{event.status}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConsumerPage;
