import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { TextField } from "@mui/material";

// Redux states 
import { useSelector, useDispatch } from 'react-redux';
import { set, selectAffordances } from "../../store/reducers/affordances"

function Affordances({
  select1,
  setSelected1,
  select2,
  setSelected2,
  open,
  setOpen,
}) {//affordances

  const affordancesSelection = [
    "Acknowledgement",
    "Level",
    "Progression",
    "Point",
    "Stats",

    "Chance",
    "Imposed choice",
    "Economy",
    "Rarity",
    "Time pressure",

    "Competition",
    "Cooperation",
    "Reputation",
    "Social pressure",

    "Novelty",
    "Objectives",
    "Puzzle",
    "Renovation",
    "Sensation",

    "Narrative",
    "Story telling",
  ];
  const router = useRouter();
  // const affordances = useSelector((state) => { return state })  // il vaolore del mio stato (slice)
  const affordances = useSelector(selectAffordances) // il vaolore del mio stato (slice)
  const dispatch = useDispatch(); // funzione che ci permette di chiamare i reducer 

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
      <h2 className=" mt-4 block text-gray-700  mb-2 ">
        Gamification elements component shows a list of gamified elements used
        in the software. The previous components are useful to better understand
        which gamification elements fit in the proper way. The selected taxonomy
        of possible gamified elements comes from the work of Toda and colleagues
        (Toda, Klock, et al., 2019; Toda, Oliveira, et al., 2019): <br />
        • Performance: Acknowledgement, Level, Progression, Points, Stats;{" "}
        <br />
        • Ecological: Chance, Imposed choice, Economy, Rarity, Time Pressure;{" "}
        <br />
        • Social: Competition, Cooperation, Reputation, Social Pressure; <br />
        • Personal: Novelty, Objectives, Puzzle, Renovation, Sensation; <br />
        • Fictional: Narrative, Storytelling
        <br />
      </h2>

      <FormControl>
        <Select
          className="relative w-full shadow-md mb-4"
          single
          value={affordances[0]}
          onChange={(e) => dispatch(set({ payload: e.target.value, pos: 0 }))}
          input={<OutlinedInput />}
        >
          {affordancesSelection.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        className={
          affordances[0] == ""
            ? "hidden w-full border  shadow-md "
            : "flex w-full border  shadow-md mb-4"
        }
        type="text"
        multiline
        rows={3}
        placeholder={affordances[0]}
      // value={behavior}
      // onChange={(e) => setBehavior(e.target.value)}
      />
      <FormControl>
        <Select
          className="relative w-full shadow-md mb-4"
          single
          displayEmpty
          value={affordances[1]}
          onChange={(e) => dispatch(set({ payload: e.target.value, pos: 1 }))}
          input={<OutlinedInput />}
        >
          {affordancesSelection.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        className={
          affordances[1] == ""
            ? "hidden w-full border  shadow-md "
            : "flex w-full border  shadow-md mb-4"
        }
        type="text"
        multiline
        rows={3}
        placeholder={affordances[1]}
      // value={behavior}
      // onChange={(e) => setBehavior(e.target.value)}
      />
      <FormControl>
        <Select
          className="relative w-full shadow-md mb-4"
          single
          displayEmpty
          value={affordances[2]}
          onChange={(e) => dispatch(set({ payload: e.target.value, pos: 2 }))}
          input={<OutlinedInput />}
        >
          {affordancesSelection.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        className={
          affordances[2] == ""
            ? "hidden w-full border  shadow-md "
            : "flex w-full border  shadow-md mb-4"
        }
        type="text"
        multiline
        rows={3}
        placeholder={affordances[2]}
      // value={behavior}
      // onChange={(e) => setBehavior(e.target.value)}
      />
      <FormControl>
        <Select
          className="relative w-full shadow-md mb-4"
          single
          displayEmpty
          value={affordances[3]}
          onChange={(e) => dispatch(set({ payload: e.target.value, pos: 3 }))}
          input={<OutlinedInput label="Name" />}
        >
          {affordancesSelection.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        className={
          affordances[3] == ""
            ? "hidden w-full border  shadow-md "
            : "flex w-full border  shadow-md mb-4"
        }
        type="text"
        multiline
        rows={3}
        placeholder={affordances[3]}
      // value={behavior}
      // onChange={(e) => setBehavior(e.target.value)}
      />
      <FormControl className={select1 == true ? "flex" : "hidden"}>
        <Select
          className="relative w-full shadow-md mb-4 "
          single
          inputProps={{ "aria-label": "Without label" }}
          displayEmpty
          value={affordances[4]}
          onChange={(e) => dispatch(set({ payload: e.target.value, pos: 4 }))}
          input={<OutlinedInput label="Name" />}
        >
          {affordancesSelection.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        className={
          affordances[4] == ""
            ? "hidden w-full border  shadow-md "
            : "flex w-full border  shadow-md mb-4"
        }
        type="text"
        multiline
        rows={3}
        placeholder={affordances[4]}
      // value={behavior}
      // onChange={(e) => setBehavior(e.target.value)}
      />
      <FormControl className={select2 == true ? "flex" : "hidden"}>
        <Select
          className="relative w-full shadow-md mb-4"
          single
          inputProps={{ "aria-label": "Without label" }}
          displayEmpty
          value={affordances[5]}
          onChange={(e) => dispatch(set({ payload: e.target.value, pos: 5 }))}
          input={<OutlinedInput label="Name" />}
        >
          {affordancesSelection.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className={select1 == false ? "hidden" : "flex"}>
        <FormControl>
          <Select
            className="relative w-full shadow-md mb-4 "
            single
            displayEmpty
            value={affordances[5]}
            onChange={(e) => dispatch(set(e.target.value))}
            input={<OutlinedInput />}
          >
            {affordancesSelection.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={select2 == false ? "hidden" : "flex"}>
        <FormControl>
          <Select
            className="relative w-full shadow-md mb-4"
            single
            displayEmpty
            value={affordances[6]}
            onChange={(e) => dispatch(set(e.target.value))}
            input={<OutlinedInput />}
          >
            {affordancesSelection.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="justify-center items-center flex">
        <button
          className="bg-yellow-gamy rounded-full border-0 p-3 hover:bg-yellow-600 hover:shadow-lg "
          onClick={() => {
            if (select1 == false) setSelected1(true);
            else setSelected2(true);

            if (select1 == true) setOpen(true);
          }}
        >
          <AddIcon />
        </button>
      </div>
    </div >
  );
}

export default Affordances;
