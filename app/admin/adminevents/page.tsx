"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";

type Event = {
  id: string;
  eventName: string;
  status: string;
};

const AdminEventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventsList: Event[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Event, 'id'>),
      }));
      setEvents(eventsList);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold">Admin: All Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.eventName} - {event.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminEventsPage;
