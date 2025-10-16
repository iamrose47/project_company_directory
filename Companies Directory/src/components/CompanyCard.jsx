import React from "react";

export default function CompanyCard({ company }) {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-5 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
      <h3 className="font-bold text-xl text-purple-800">{company.name}</h3>
      <p className="text-sm text-purple-600 mt-1">{company.industry}</p>
      <p className="text-sm text-gray-600 mt-2">{company.location}</p>
      <div className="mt-4 flex gap-2">
        <button className="px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition">
          View
        </button>
        <button className="px-3 py-1 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition">
          Contact
        </button>
      </div>
    </div>
  );
}
