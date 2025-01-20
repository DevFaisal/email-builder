"use client";

import React, { useEffect, useState } from "react";
import getSavedTemplates from "@/actions/fetchTemp";
import TempCard from "@/components/TempCard";
import Navbar from "@/components/Navbar";
import Model from "@/components/model";

export default function SavedTemp() {
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSaved = async () => {
    setIsLoading(true);
    try {
      const result = await getSavedTemplates();
      setTemplates(JSON.parse(result?.data));
    } catch (error) {
      console.error("Error fetching templates:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSaved();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Saved Templates
        </h1>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : templates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {templates.map((temp) => (
              <TempCard key={temp._id} title={temp.title} html={temp.html} />
            ))}
          </div>
        ) : (
          <p className="text-xl text-gray-600 text-center">
            No saved templates found.
          </p>
        )}
      </div>
    </>
  );
}
