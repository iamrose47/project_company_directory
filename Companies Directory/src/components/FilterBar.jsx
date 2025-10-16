import React from "react";

export default function FilterBar({
  query,
  onQuery,
  location,
  onLocation,
  locations,
  industry,
  onIndustry,
  industries,
  sortOrder,
  onSortOrder,
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-3 items-center transition duration-300 hover:shadow-xl">
      <input
        type="text"
        value={query}
        onChange={(e) => onQuery(e.target.value)}
        placeholder="Search by company name..."
        className="flex-1 p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-500"
      />

      <select
        value={location}
        onChange={(e) => onLocation(e.target.value)}
        className="p-2 border border-purple-300 rounded-md bg-purple-50 text-purple-700 hover:bg-purple-100 transition"
      >
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      <select
        value={industry}
        onChange={(e) => onIndustry(e.target.value)}
        className="p-2 border border-pink-300 rounded-md bg-pink-50 text-pink-700 hover:bg-pink-100 transition"
      >
        {industries.map((ind) => (
          <option key={ind} value={ind}>
            {ind}
          </option>
        ))}
      </select>

      <select
        value={sortOrder}
        onChange={(e) => onSortOrder(e.target.value)}
        className="p-2 border border-green-300 rounded-md bg-green-50 text-green-700 hover:bg-green-100 transition"
      >
        <option value="none">Sort</option>
        <option value="az">A → Z</option>
        <option value="za">Z → A</option>
      </select>
    </div>
  );
}
