"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";

// Define TypeScript interface for event object
interface Event {
  id: string;
  eventName: string;
  status: string;
}

const AdminEventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

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
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Admin: All Events</h1>
      <ul className="space-y-2">
        {events.map((event) => (
          <li
            key={event.id}
            className="p-3 bg-gray-100 rounded shadow-sm hover:shadow-md transition"
          >
            <span className="font-semibold">{event.eventName}</span> –{" "}
            <span className="text-gray-600 text-sm">{event.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminEventsPage;
