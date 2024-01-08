import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton() {
  const [selectedToggle, setSelectedToggle] = React.useState("Overview");
  const options = ["Overview", "KOs", "Data Inventory"];

  const handleChange = (event: any) => {
    setSelectedToggle(event.target.value);
  };

  return (
    <ToggleButtonGroup
      value={selectedToggle}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      {options.map((option: any, index: any) => (
        <ToggleButton
          value={option}
          key={index}
          sx={{
            border: "1px solid #007AFF",
            "&.Mui-selected": {
              backgroundColor: "#007AFF",
              color: "white",
            },
            "&:hover": {},
            color: "#007AFF",
            width: "280px",
          }}
        >
          {option}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
