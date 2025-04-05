"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";

<<<<<<< HEAD
type Event = {
  id: string;
  eventName: string;
  status: string;
};

const AdminEventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
=======
const AdminEventsPage = () => {
  const [events, setEvents] = useState([]);
>>>>>>> 900cede (Initial commit)

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
<<<<<<< HEAD
      const eventsList: Event[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Event, 'id'>),
      }));
      setEvents(eventsList);
=======
      const eventsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
     
>>>>>>> 900cede (Initial commit)
    };

    fetchEvents();
  }, []);

  return (
    <div>
<<<<<<< HEAD
      <h1 className="text-xl font-bold">Admin: All Events</h1>
      <ul>
        {events.map((event) => (
=======
      <h1 className="text-xl font-bold">All Events</h1>
      <ul>
        {events.map((event: any) => (
>>>>>>> 900cede (Initial commit)
          <li key={event.id}>
            {event.eventName} - {event.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminEventsPage;
