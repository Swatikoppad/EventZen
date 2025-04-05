// src/eventService.ts
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Add a new event
export const addEvent = async (eventData: any) => {
  try {
    const docRef = await addDoc(collection(db, "events"), eventData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding event:", error);
  }
};

// Get all events
export const getEvents = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "events"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

// Update an event
export const updateEvent = async (eventId: string, updatedData: any) => {
  try {
    const eventRef = doc(db, "events", eventId);
    await updateDoc(eventRef, updatedData);
  } catch (error) {
    console.error("Error updating event:", error);
  }
};

// Delete an event
export const deleteEvent = async (eventId: string) => {
  try {
    const eventRef = doc(db, "events", eventId);
    await deleteDoc(eventRef);
  } catch (error) {
    console.error("Error deleting event:", error);
  }
};
