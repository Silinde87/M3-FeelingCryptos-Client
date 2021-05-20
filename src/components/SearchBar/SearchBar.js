import React from "react";
import { Input } from '@material-ui/core';
import SCSearchBar from "./SearchBar.styled";

export default function SearchBar({ setSearch }) {
  return (
    <SCSearchBar id="search-container" style={{ paddingBottom: "20px"}}>
    <Input type="search"
        name="search"
        placeholder="Search"
        onChange={(e) => setSearch((e.target.value))}
    />
    </SCSearchBar>
  );
}

