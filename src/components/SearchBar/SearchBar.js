import React from "react";

export default function SearchBar({ setSearch }) {
  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search"
        onChange={(e) => setSearch((e.target.value).replace(/\//i, ''))}
      />
    </div>
  );
}
