
import { useState } from "react";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Affordances({
  performance,
  performanceSelection,
  setPerformance,

  ecological,
  ecologicalSelection,
  setEcological,

  social,
  socialSelection,
  setSocial,

  personal,
  personalSelection,
  setPersonal,

  fictional,
  fictionalSelection,
  setFictional,
}) {
  return (
    <div className="flex flex-col w-[60em] py-4">
      
      <FormControl>
      <InputLabel>Performance</InputLabel>
        <Select
          className="relative w-full shadow-md "
          single
          value={performance}
          onChange={(e) => setPerformance(e.target.value)}
          input={<OutlinedInput label="Name" />}
        >
          {performanceSelection.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    </div>
  );
}

export default Affordances;
