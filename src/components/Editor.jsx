"use client";
import { useEffect, useRef, useState } from "react";
import layouts from "@/utils/layouts";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsFillBackspaceFill } from "react-icons/bs";
import { AvatarUploader } from "./avatar-uploader";
import axios from "axios";

export default function Editor({ ChosenIndex }) {
  const refs = useRef(null);
  const [index, setIndex] = useState(parseInt(ChosenIndex) || 0);
  const [template, setTemplate] = useState({
    title: "",
    content: "",
    logo: "https://img.icons8.com/?size=100&id=uZ8RFAi12S1D&format=png&color=000000",
  });

  useEffect(() => {
    if (refs.current) {
      const iframeDocument = refs.current.contentDocument;
      if (iframeDocument) {
        const title = iframeDocument.querySelector("#title");
        const content = iframeDocument.querySelector("#content");
        const logo = iframeDocument.querySelector("#logo");

        if (title && template.title) title.innerText = template.title;
        if (content && template.content) content.innerText = template.content;
        if (logo) logo.src = template.logo;
      }
    }
  }, [template, index]);

  async function handleSubmit() {
    const html = layouts[index]?.html;

    if (!html) return alert("Invalid layout selected");

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const title = doc.getElementById("title");
    const content = doc.getElementById("content");
    const logo = doc.getElementById("logo");

    if (title) title.textContent = template.title;
    if (content) content.textContent = template.content;
    if (logo) logo.src = template.logo;

    const serializer = new XMLSerializer();
    const updatedHtmlString = serializer.serializeToString(doc);
    console.log(typeof updatedHtmlString);
    try {
      const res = await axios.post("/api/uploadEmailConfig", {
        data: { title: template.title, html: updatedHtmlString },
      });

      const fileName = layouts[index]?.name
        ? layouts[index].name.concat("-template.html")
        : "template.html";

      const blob = new Blob([updatedHtmlString]);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert("Something went wrong");
    }
  }

  async function saveAvatar(url) {
    setTemplate({ ...template, logo: url });
  }

  return (
    <main className="flex gap-3 fixed w-full bg-stone-400 h-screen p-4">
      <section className="bg-stone-300 h-full w-3/4 rounded-md ring-1 ring-stone-200">
        <div className="p-3 flex items-center  gap-3 text-xl bg-stone-200 font-semibold">
          <button
            onClick={(e) => window.location.replace("/")}
            className="flex justify-center items-center text-sm gap-1 px-2 py-2 bg-stone-100 rounded-md border-[1px] hover:bg-stone-300 border-stone-400"
          >
            <FaChevronLeft size={13} /> <span>Back</span>
          </button>
          <span>{layouts[index]?.name}</span>
        </div>
        <div className="flex justify-between p-10 pb-20 h-full">
          <button
            onClick={() => {
              const newIndex = (index - 1 + layouts.length) % layouts.length;
              setIndex(newIndex);
              window.location.replace(`/editor/${newIndex}`);
            }}
          >
            <FaChevronLeft
              className="text-slate-800 hover:translate-x-1 duration-300"
              size={30}
            />
          </button>
          <div className="flex justify-center p-10 flex-col items-center w-1/2 bg-white overflow-y-scroll rounded-md">
            <iframe
              ref={refs}
              srcDoc={layouts[index]?.html}
              title={layouts[index]?.name}
              className="w-full h-[60vh]"
            />
          </div>
          <button
            onClick={() => {
              const newIndex = (index + 1) % layouts.length;
              setIndex(newIndex);
              window.location.replace(`/editor/${newIndex}`);
            }}
          >
            <FaChevronRight
              className="text-slate-800 hover:-translate-x-1 duration-300"
              size={30}
            />
          </button>
        </div>
      </section>
      <section className="bg-stone-100 w-3/12 h-full rounded-md">
        <div className="flex flex-col gap-2 p-4">
          <div className="flex flex-col">
            <label className="font-semibold">Title</label>
            <input
              className="outline-none border-[1px] border-stone-600 rounded-sm px-1 py-1.5"
              type="text"
              placeholder="Enter the title"
              onChange={(e) =>
                setTemplate({ ...template, title: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Content</label>
            <textarea
              className="outline-none px-1 border-[1px] border-stone-600 rounded-sm"
              placeholder="Enter the content"
              onChange={(e) =>
                setTemplate({ ...template, content: e.target.value })
              }
            ></textarea>
          </div>
          <AvatarUploader onUploadSuccess={saveAvatar} />
          <button
            onClick={handleSubmit}
            className="bg-slate-500 hover:bg-slate-600 text-white px-4 py-2 rounded"
          >
            Download Template
          </button>
        </div>
      </section>
    </main>
  );
}
