import React from "react";
import CompaniesPage from "./pages/CompaniesPage";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 md:p-8">
      <header className="max-w-6xl mx-auto mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-800 animate-pulse">
          Companies Directory
        </h1>
        <p className="text-gray-700 mt-2 md:text-lg">
          Filter, search, and explore amazing companies!
        </p>
      </header>

      <main className="max-w-6xl mx-auto">
        <CompaniesPage />
      </main>
    </div>
  );
}
