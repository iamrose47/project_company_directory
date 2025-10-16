import React from "react";

export default function Pagination({ page, setPage, pageCount }) {
  if (pageCount <= 1) return null;

  return (
    <div className="flex justify-center items-center mt-6 gap-2">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className="px-3 py-1 bg-blue-300 text-white rounded-md hover:bg-blue-400 transition"
      >
        Prev
      </button>

      {Array.from({ length: pageCount }).map((_, i) => (
        <button
          key={i + 1}
          onClick={() => setPage(i + 1)}
          className={`px-3 py-1 rounded-md ${
            page === i + 1
              ? "bg-purple-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
        className="px-3 py-1 bg-blue-300 text-white rounded-md hover:bg-blue-400 transition"
      >
        Next
      </button>
    </div>
  );
}
