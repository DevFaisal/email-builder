export default function TempCard({ title, html }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <iframe
            srcDoc={html}
            className="w-full h-64 md:h-96"
            title={title}
            sandbox="allow-scripts"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
