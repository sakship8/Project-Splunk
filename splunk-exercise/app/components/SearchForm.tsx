import React from "react";
import { searchInputBoxStyle } from "./SearchFormStyle";


function SearchForm() {
  return (
    <div style={{ position: "relative" }}>
      <input
        placeholder="Search for Knowledge"
        style={{
          ...searchInputBoxStyle,
          paddingLeft: "30px",
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="#007AFF" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.85-5-5.66-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.19 5.34 5.66a6.505 6.505 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          backgroundSize: "30px 30px",
        }}
      ></input>
    </div>
  );
}

export default SearchForm;
