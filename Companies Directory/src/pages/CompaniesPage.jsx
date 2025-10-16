import React, { useEffect, useMemo, useState } from "react";
import companiesData from "../companies.json"; 
import FilterBar from "../components/FilterBar";
import CompanyCard from "../components/CompanyCard";
import Pagination from "../components/Pagination";

export default function CompaniesPage() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("All");
  const [industry, setIndustry] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");
  const [page, setPage] = useState(1);
  const perPage = 6;

  // Load JSON data 
  useEffect(() => {
    try {
      setCompanies(companiesData);
      setLoading(false);
    } catch (err) {
      console.error("Failed to load companies:", err);
      setLoading(false);
    }
  }, []);

  // Dropdown options
  const locations = useMemo(
    () => ["All", ...new Set(companies.map((c) => c.location))],
    [companies]
  );
  const industries = useMemo(
    () => ["All", ...new Set(companies.map((c) => c.industry))],
    [companies]
  );

  // Filter + sort
  const filtered = useMemo(() => {
    let list = companies;

    if (query.trim()) {
      list = list.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (location !== "All") list = list.filter((c) => c.location === location);
    if (industry !== "All") list = list.filter((c) => c.industry === industry);

    if (sortOrder === "az") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sortOrder === "za") list = [...list].sort((a, b) => b.name.localeCompare(a.name));

    return list;
  }, [companies, query, location, industry, sortOrder]);

  // Pagination
  const total = filtered.length;
  const pageCount = Math.ceil(total / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  // Reset page on filter/sort change
  useEffect(() => {
    setPage(1);
  }, [query, location, industry, sortOrder]);

  return (
    <div>
      
      <FilterBar
        query={query}
        onQuery={setQuery}
        location={location}
        onLocation={setLocation}
        locations={locations}
        industry={industry}
        onIndustry={setIndustry}
        industries={industries}
        sortOrder={sortOrder}
        onSortOrder={setSortOrder}
      />

      <section className="mt-6">
        {loading ? (
          <div className="text-center py-10 text-gray-500">Loading companies...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-10 text-gray-500">No companies found.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {paginated.map((c) => (
                <CompanyCard key={c.id} company={c} />
              ))}
            </div>

            {pageCount > 1 && (
              <Pagination page={page} setPage={setPage} pageCount={pageCount} />
            )}
          </>
        )}
      </section>
    </div>
  );
}
