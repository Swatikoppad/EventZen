import { addDoc, collection } from "firebase/firestore";

const addEvent = async () => {
  try {
    await addDoc(collection(db, "events"), {
      eventName: "Tech Conference 2025",
      attendeesCount: 100,
      status: "Upcoming",
      venueId: "venue_123",
      organizerId: "admin_456",
    });
    alert("Event added successfully!");
  } catch (error) {
    console.error("Error adding event: ", error);
  }
};
