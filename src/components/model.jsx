import { useRouter } from "next/navigation";

export default function Model({ selectedTemplate, setSelectedTemplate }) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">{selectedTemplate.name}</h2>
          <button
            onClick={() => setSelectedTemplate(null)}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
        <iframe
          srcDoc={selectedTemplate.html}
          title={selectedTemplate.name}
          className="w-full h-[60vh]"
        />
        <button
          className="w-full p-4 text-xl font-semibold bg-green-500 duration-300 hover:bg-green-600"
          onClick={() => router.push(`/editor/${selectedTemplate.idx}`)}
        >
          Goto
        </button>
      </div>
    </div>
  );
}
