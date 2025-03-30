"use client";

import React, { useEffect, useState } from "react";
import { Advocate } from "@/db/types";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searching, setSearching] = useState<boolean>(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const getAdvocates = await fetch("/api/advocates");
      if (!getAdvocates.ok) {
        throw new Error("Network response was not ok");
      }
      const response = await getAdvocates.json();
      setAdvocates(response.data);
      setFilteredAdvocates(response.data);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearching(searchTerm.length > 0);

    const searchTermElement = document.getElementById("search-term");
    if (searchTermElement) searchTermElement.innerHTML = searchTerm;

    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        advocate.firstName.includes(searchTerm) ||
        advocate.lastName.includes(searchTerm) ||
        advocate.city.includes(searchTerm) ||
        advocate.degree.includes(searchTerm) ||
        advocate.specialties.includes(searchTerm) ||
        advocate.yearsOfExperience.toString().includes(searchTerm)
      );
    });
    setFilteredAdvocates(filteredAdvocates);
  };

  const handleReset = () => {
    setFilteredAdvocates(advocates);
  };

  return (
    <main style={{ margin: "24px" }}>
      <div style={{ paddingBottom: "24px" }}>
        <h1>Solace Advocates</h1>
      </div>
      <div>
        <h2>Search</h2>
        {searching && (
          <p>
            Searching for: <span id="search-term"></span>
          </p>
        )}
        <input style={{ border: "1px solid black", height: "35px"}} onChange={handleSearch} />
        <button
          style={{ border: "1px solid black", padding: "5px", margin: 5 }}
          onClick={handleReset}
        >
          Reset Search
        </button>
      </div>
      <br />
      <br />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={{ width: "100%", overflowX: "auto"}}>
          <thead style={{position: "sticky", top: "0", background: "grey"}}>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>City</th>
              <th>Degree</th>
              <th>Specialties</th>
              <th>Years of Experience</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {filteredAdvocates.map((advocate) => {
              return (
                <tr key={advocate.id}>
                  <td>{advocate.firstName}</td>
                  <td>{advocate.lastName}</td>
                  <td>{advocate.city}</td>
                  <td>{advocate.degree}</td>
                  <td>
                    {advocate.specialties.map((specialty) => (
                      <div key={specialty}>{specialty}</div>
                    ))}
                  </td>
                  <td>{advocate.yearsOfExperience}</td>
                  <td>{advocate.phoneNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </main>
  );
}
