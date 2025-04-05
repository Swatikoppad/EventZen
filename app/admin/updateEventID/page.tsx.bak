import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";

const UpdateEventPage = ({ params }: { params: { ID: string } }) => {
  const [status, setStatus] = useState("");

  const updateEventStatus = async () => {
    try {
      const eventRef = doc(db, "events", params.ID);
      await updateDoc(eventRef, { status });
      alert("Event status updated!");
    } catch (error) {
      console.error("Error updating event: ", error);
    }
  };

  return (
    <div>
      <h1>Update Event Status</h1>
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="Upcoming">Upcoming</option>
        <option value="Ongoing">Ongoing</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={updateEventStatus} className="bg-green-500 text-white px-4 py-2">
        Update Status
      </button>
    </div>
  );
};

export default UpdateEventPage;
