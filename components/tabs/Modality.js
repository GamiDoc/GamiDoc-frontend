import { useState } from "react";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";

export default function Modality({ modality, setModality, selectObj1 }) {
  const router = useRouter();

  return (
    <div className="flex flex-col py-4 w-[60em]">
      <label className=" mt-4 block text-gray-700  font-bold mb-2"><IconButton
          aria-label="Example"
          onClick={() => router.push("/documentation#modality")}
        >
          <InfoOutlinedIcon sx={{ fontSize: 20 }} />
        </IconButton>
        Type of Modality
      </label>


      <h2 className="mt-4 block text-gray-700  mb-2 ">
        This section is dedicated to the definition of the main modality
        included in the gamification software.
      </h2>
      <FormControl>
        <InputLabel>Modality</InputLabel>
        <Select
          className="relative w-full shadow-md "
          single
          value={modality}
          onChange={(e) => setModality(e.target.value)}
          input={<OutlinedInput label="Name" />}
        >
          {selectObj1.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
