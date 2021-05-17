import React from "react";
import { Input } from '@material-ui/core';

export default function SearchBar({ setSearch }) {
  return (
    <div style={{ paddingBottom: "15px"}}>
    <Input type="search"
        name="search"
        placeholder="Search"
        onChange={(e) => setSearch((e.target.value).replace(/\//i, ''))}/>
    </div>
  );
}
