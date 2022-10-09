import { useState, useEffect } from "react"
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";
import { TextField } from "@mui/material";

const sanityIoImageLoader = ({ src, width, quality }) => {
  return `https://i.imgur.com/jUFe5JY.png`;
};

function Affordances({
  affordances,
  setAffordances,
  affordancesSelection,
}) {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [value3, setValue3] = useState("")

  useEffect(() => {
    if (value1 && value2 && value3) return
    setAffordances(value1 + "=>" + value2 + "=>" + value3)
  }, [value1, value2, value3])

  useEffect(() => {
    let aff = affordances.split("=>")
    setValue1(aff[0])
    setValue2(aff[1])
    setValue3(aff[2])
  }, [])
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
        (Toda, Klock, et al., 2019; Toda, Oliveira, et al., 2019): <br />•
        Performance: Acknowledgement, Level, Progression, Points, Stats; <br />•
        Ecological: Chance, Imposed choice, Economy, Rarity, Time Pressure;{" "}
        <br />
        • Social: Competition, Cooperation, Reputation, Social Pressure; <br />
        • Personal: Novelty, Objectives, Puzzle, Renovation, Sensation; <br />
        • Fictional: Narrative, Storytelling
        <br />
      </h2>
      <div className="w-auto mt-3">

        <TextField
          className=" -top-2 w-31 border shadow-md "
          id="username"
          type="text"
          multiline
          placeholder="Game action"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />

        <Image
          loader={sanityIoImageLoader}
          src="image-src"
          alt="GamiDoc"
          height={34}
          width={85}
        />

        <TextField
          className=" -top-2 w-31 border shadow-md "
          id="username"
          type="text"
          multiline
          placeholder="Condition"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />

        <Image
          loader={sanityIoImageLoader}
          className="top-4"
          src="image-src"
          alt="GamiDoc"
          height={34}
          width={85}
        />
        <FormControl className="relative w-60 shadow-md mb-4 -top-2">
          <Select
            single
            value={value3}
            onChange={(e) => setValue3(e.target.value)}
            input={<OutlinedInput />}
          >
            <MenuItem disabled value="">
              <em className="text-gray-400 font-normal ">Game elements</em>
            </MenuItem>
            {affordancesSelection.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

      </div>
    </div>
  );
}

export default Affordances;
