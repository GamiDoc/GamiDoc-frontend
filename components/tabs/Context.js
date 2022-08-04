import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import Link from "next/link";

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
  selectObj2, // Aimo
  selectObj3, // set target cat
  selectObj4, // Target categories
}) {
  const router = useRouter();

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
        <Link href="/documentation#domain">
          <IconButton aria-label="Example">
            <InfoOutlinedIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Link>
        Domain
      </label>
      <h2 className=" mt-4  block text-gray-700  mb-2 ">
        Gamification elements work differently in relation to context. In this
        section, we ask designers to list the applicational domain.
      </h2>
      <FormControl>
        <InputLabel>Domain</InputLabel>
        <Select
          className="relative w-full shadow-md "
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

      <label className=" mt-4 block text-gray-700  font-bold mb-2">
        <Link href="/documentation#aim">
          <IconButton aria-label="Example">
            <InfoOutlinedIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Link>
        Aim
      </label>
      <h2 className=" mt-4 block text-gray-700  mb-2 ">
        To clearly understand the goal of the software, we ask designers to
        clearly state the final purpose of the future software.
      </h2>

      <FormControl>
        <InputLabel>Aim</InputLabel>
        <Select
          className="relative w-full shadow-md "
          single
          value={aim}
          onChange={(e) => setAim(e.target.value)}
          input={<OutlinedInput label="Name" />}
        >
          {selectObj2.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <label className="mt-4 block text-gray-700  font-bold mb-2">
        <Link href="/documentation#behaviors">
          <IconButton aria-label="Example">
            <InfoOutlinedIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Link>
        Behaviors to be encouraged...
      </label>
      <h2 className="w-[60em] mt-4 block text-gray-700  mb-2 ">
        It is essential to focus on the different behaviors we want to encourage
        and on the different behaviors we want users to avoid to reach the goal.
        Thus, we ask designers to list the possible behaviors that have to be
        encouraged and which ones should be avoided to reach the goal.
      </h2>
      <label className="block text-gray-700   font-bold mb-2" />
      <TextField
        className="w-full border  shadow-md "
        id="username"
        type="text"
        multiline
        rows={3}
        placeholder="Behaviors"
        value={behavior}
        onChange={(e) => setBehavior(e.target.value)}
      />

      <label className="mt-4 block text-gray-700  font-bold mb-2">
      <Link href="/documentation#target">
        <IconButton
          aria-label="Example"
        >
          <InfoOutlinedIcon sx={{ fontSize: 20 }} />
        </IconButton>
        </Link>
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
          className="relative w-full shadow-md "
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
      <FormControl className="top-5">
        <InputLabel>Categories</InputLabel>
        <Select
          className="relative w-full shadow-md "
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
