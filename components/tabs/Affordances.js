import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

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

  select1,
  setSelected1,
  select2,
  setSelected2,

  affordances1,
  setAffordances1,
  affordances2,
  setAffordances2,
  affordances3,
  setAffordances3,
  affordances4,
  setAffordances4,
  affordances5,
  setAffordances5,
  affordances6,
  setAffordances6,
  open,
  setOpen,
  affordancesSelection,
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col w-[60em] py-4">
      <label className=" mt-4 block text-gray-700  font-bold mb-2">
        <Link href="documentation#affordances">
          <IconButton aria-label="Example">
            <InfoOutlinedIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Link>
        Affordances
      </label>

      <FormControl>
        <Select
          className="relative w-full shadow-md mb-4"
          single
          value={affordances1}
          onChange={(e) => setAffordances1(e.target.value)}
          input={<OutlinedInput />}
        >
          {affordancesSelection.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <Select
          className="relative w-full shadow-md mb-4"
          single
          displayEmpty
          value={affordances2}
          onChange={(e) => setAffordances2(e.target.value)}
          input={<OutlinedInput />}
        >
          {affordancesSelection.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <Select
          className="relative w-full shadow-md mb-4"
          single
          displayEmpty
          value={affordances3}
          onChange={(e) => setAffordances3(e.target.value)}
          input={<OutlinedInput />}
        >
          {affordancesSelection.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <Select
          className="relative w-full shadow-md mb-4"
          single
          displayEmpty
          value={affordances4}
          onChange={(e) => setAffordances4(e.target.value)}
          input={<OutlinedInput />}
        >
          {affordancesSelection.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={select1 == false ? "hidden" : "flex"}>
        <Select
          className="relative w-full shadow-md mb-4 "
          single
          displayEmpty
          value={affordances5}
          onChange={(e) => setAffordances5(e.target.value)}
          input={<OutlinedInput />}
        >
          {affordancesSelection.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={select2 == false ? "hidden" : "flex"}>
        <Select
          className="relative w-full shadow-md mb-4"
          single
          displayEmpty
          value={affordances6}
          onChange={(e) => setAffordances6(e.target.value)}
          input={<OutlinedInput />}
        >
          {affordancesSelection.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="justify-center items-center flex">
        <Fab
          size="medium"
          color="info"
          aria-label="add"
          className="bg-yellow-gamy  hover:bg-yellow-600 hover:shadow-lg "
          onClick={() => {
            if (select1 == false) setSelected1(true);
            else setSelected2(true);

            if (select1 == true) setOpen(true);
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

export default Affordances;
