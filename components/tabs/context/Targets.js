import Swal from "sweetalert2"
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


export default function Targets({
  targetAge,
  setTargetAge,
  targetUser,
  setTargetUser,
  targetCategory,
  setTargetCategory,
  selectObj3, // Target categories
  selectObj4, // Categories selection
  saveDraft
}) {
  const router = useRouter();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTargetAge(
      typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <label className="mt-4 block text-gray-700  font-bold mb-2">
        <IconButton aria-label="Example">
          <InfoOutlinedIcon sx={{ fontSize: 20 }} onClick={() => {
            Swal.fire({ title: 'Your changes have been saved in a Draft', icon: 'info' })
            saveDraft()
            router.push("documentation#target")
          }} />
        </IconButton>
        Target user
      </label>
      <h2 className="w-[60em] mt-4 block text-gray-700  mb-2 ">
        Several documents in the gamification field suggest that users &apos;
        individual differences and preferences are crucial for the success of
        gamified solution.
      </h2>
      <div className="my-5">
        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select
            className="relative w-full shadow-md "
            multiple
            value={targetAge}
            onChange={handleChange}
            input={<OutlinedInput label="Age" />}
          >
            {selectObj3.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Select
          className="relative w-full shadow-md "
          value={targetCategory}
          onChange={(event) => { setTargetCategory(event.target.value) }}
          input={<OutlinedInput label="Category" />}
        >
          {selectObj4.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        className="w-full border  shadow-md top-5"
        id="username"
        type="text"
        multiline
        rows={3}
        value={targetUser}
        onChange={(event) => setTargetUser(event.target.value)}
        placeholder="Target user"
      />

    </>
  )
}
