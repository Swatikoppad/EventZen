"use client";

import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";



interface PageProps {
    params: {
      ID: string;
    };
  }
  
  export default async function Page({ params }: PageProps) {
    const { ID } = params;
  
    // You can fetch event details using ID here if needed
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Update Event for ID: {ID}</h1>
      </div>
    );
  }
  