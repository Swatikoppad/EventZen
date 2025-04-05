import { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig"; // adjust the path as needed

export default function TestFirestore() {
  useEffect(() => {
    const addEvent = async () => {
      try {
        const docRef = await addDoc(collection(db, "events"), {
          eventName: "Tech Conference",
          date: "2025-04-10",
          location: "Bangalore",
        });
        console.log("✅ Document written with ID:", docRef.id);
      } catch (e) {
        console.error("🔥 Error adding document:", e);
      }
    };

    addEvent();
  }, []);

  return <div>📦 Testing Firestore... Check your console!</div>;
}
