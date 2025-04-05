"use client";

import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";

const UpdateEventPage = () => {
  const [eventId, setEventId] = useState("");
  const [newStatus, setNewStatus] = useState("");

  const handleUpdate = async () => {
    if (!eventId || !newStatus) {
      alert("Please fill in both fields");
      return;
    }

    try {
      const eventRef = doc(db, "events", eventId);
      await updateDoc(eventRef, { status: newStatus });
      alert("Event updated successfully!");
    } catch (error) {
      console.error("Error updating event:", error);
      alert("Failed to update event.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Update Event Status</h1>
      <input
        type="text"
        placeholder="Event ID"
        value={eventId}
        onChange={(e) => setEventId(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="New Status"
        value={newStatus}
        onChange={(e) => setNewStatus(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button
        onClick={handleUpdate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Update
      </button>
    </div>
  );
};

export default UpdateEventPage;
