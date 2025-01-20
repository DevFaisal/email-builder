"use client";

import { useState } from "react";
import layouts from "@/utils/layouts";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Model from "@/components/model";

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const router = useRouter();

  return (
    <>
      {" "}
      <Navbar />
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {layouts.map((layout, idx) => (
              <div key={idx} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4 inline-flex items-center text-white transition-all duration-300 group-hover:bg-white/20">
                  <span className="font-medium text-lg">{layout.name}</span>
                </div>
                <div
                  onClick={() => setSelectedTemplate({ ...layout, idx: idx })}
                  className="transform transition-all duration-300 bg-white/5 hover:bg-white/10 h-[40vh] flex flex-col rounded-lg justify-center overflow-hidden cursor-pointer hover:scale-[1.03] hover:shadow-xl"
                >
                  <iframe
                    srcDoc={layout.html}
                    title={layout.name}
                    className="w-full h-full pointer-events-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedTemplate && (
          <Model
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
        )}
      </main>
    </>
  );
}
