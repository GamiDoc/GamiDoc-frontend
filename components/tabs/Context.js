import { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";


function Context({
  behavior,
  setBehavior,
  domain,
  setDomain,
  aim,
  setAim,
  targetAge,
  setTargetAge,
  targetCat,
  setTargetCat,

  selectObj1, // L'oggetto che contiene i campi del select
  selectObj3, //set target cat
  selectObj4, // Target categories
}) {
  const [isShowing, setIsShowing] = useState(0); // per transition

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTargetAge(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeDomain = (event) => {
    setDomain(event.target.value);
  };

  const handleChangeCat = (event) => {
    setTargetCat(event.target.value);
  };

  return (
    <div className="flex flex-col py-4 w-[60em]">
      <label className=" mt-4 block text-gray-700  font-bold mb-2">
        Domain
      </label>
      <h2 className=" mt-4  block text-gray-700  mb-2 ">
        Gamification elements work differently in relation to context. In this
        section, we ask designers to list the applicational domain.
      </h2>
      <FormControl>
        <InputLabel>Domain</InputLabel>
        <Select
          className="relative w-full shadow-md rounded-lg"
          single
          value={domain}
          onChange={handleChangeDomain}
          input={<OutlinedInput label="Name" />}
        >
          {selectObj1.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
     
      <label className=" mt-4 block text-gray-700  font-bold mb-2">Aim</label>
      <h2 className=" mt-4 block text-gray-700  mb-2 ">
        To clearly understand the goal of the software, we ask designers to
        clearly state the final purpose of the future software.
      </h2>
      <TextareaAutosize
        onClick={() => setIsShowing(2)}
        className="w-full border  cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none   "
        id="Aim"
        type="text"
        minRows={4}
        placeholder="Aim"
        value={aim}
        onChange={(e) => setAim(e.target.value)}
      />

      <label className="mt-4 block text-gray-700  font-bold mb-2">
        Behaviors to be encouraged...
      </label>
      <h2 className="w-[60em] mt-4 block text-gray-700  mb-2 ">
        It is essential to focus on the different behaviors we want to encourage
        and on the different behaviors we want users to avoid to reach the goal.
        Thus, we ask designers to list the possible behaviors that have to be
        encouraged and which ones should be avoided to reach the goal.
      </h2>
      <label className="block text-gray-700   font-bold mb-2" />
      <TextareaAutosize
        onClick={() => setIsShowing(3)}
        className="w-full border cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none   "
        id="username"
        type="text"
        minRows={4}
        placeholder="Behaviors"
        value={behavior}
        onChange={(e) => setBehavior(e.target.value)}
      />

      <label className="mt-4 block text-gray-700  font-bold mb-2">
        Target user
      </label>
      <h2 className="w-[60em] mt-4 block text-gray-700  mb-2 ">
        It’s essential to have in mind the target user. In this way, it is
        possible to think about motivational needs and issues concerning
        different users. In this part, we ask designers to list all the possible
        target users, reporting all the relevant information (age range,
        specific categories, etc).
      </h2>

      <FormControl>
        <InputLabel>Age</InputLabel>
        <Select
          className="relative w-full shadow-md rounded-lg"
          multiple
          value={targetAge}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {selectObj4.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className="top-10">
        <InputLabel>Categories</InputLabel>
        <Select
          className="relative w-full shadow-md rounded-lg"
          
          value={targetCat}
          onChange={handleChangeCat}
          input={<OutlinedInput label="Name" />}
        >
          {selectObj3.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Context;