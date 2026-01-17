import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  placeholder?: string;
  onSearchChange?: (value: string) => void;
}

export default function SearchBar({
  placeholder = "Search tasks, people, updates",
  onSearchChange,
}: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setValue(nextValue);
    if (onSearchChange) {
      onSearchChange(nextValue);
    }
  };

  return (
    <TextField
      size="small"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      variant="outlined"
      sx={{
        width: "100%",
        "& .MuiOutlinedInput-root": {
          backgroundColor: "white",
        },
      }}
      className="w-full"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" color="action" />
          </InputAdornment>
        ),
      }}
    />
  );
}
