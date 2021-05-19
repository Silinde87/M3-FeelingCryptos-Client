import React from "react";
import { Input } from '@material-ui/core';

export default function SearchBar({ setSearch }) {
  return (
    <div id="search-container" style={{ paddingBottom: "20px"}}>
    <Input type="search"
        name="search"
        placeholder="Search"
        onChange={(e) => setSearch((e.target.value))}/>
    </div>
  );
}
